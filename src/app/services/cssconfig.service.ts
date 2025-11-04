import { Injectable, signal, computed, effect } from '@angular/core';
import { CSS_CONFIG, SHORT_HAND_MAP } from '../app.config';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  public cssConfig = signal(CSS_CONFIG);
  readonly config = signal<Record<string, any>>({});
  readonly cssCode = signal('');

  styleUpdates = signal<Record<string, any>>({});
  public currentElement: any;

  constructor() {
    effect(() => {
      localStorage.setItem('css-config', JSON.stringify(this.config()));
    });
  }

  updateProperty(property: string, value: any, unit?: string) {
    const oldConfig = this.cssConfig();
    const newConfig = oldConfig.map(section => ({
      ...section,
      properties: section.properties.map(prop => {
        if (prop.name === property) {
          return { ...prop, value };
        }
        if (prop.props) {
          return {
            ...prop,
            props: prop.props.map((subProp: { [key: string]: any }) =>
              subProp['name'] === property ? { ...subProp, value } : subProp
            )
          };
        }
        return prop;
      })
    }));

    this.cssConfig.set(newConfig);
    this.config.update(current => ({ ...current, [property]: `${value}${unit ?? ''}` }));
    this.styleUpdates.update(current => ({
      ...current,
      [property]: unit && typeof value === 'number' ? `${value}${unit}` : value
    }));

    if (Object.keys(SHORT_HAND_MAP).includes(property)) {
      SHORT_HAND_MAP[property].forEach(subProp => {
        this.updateProperty(subProp, value, unit);
      });
    }
  }

  reset() {
    this.config.set({});
    this.cssConfig.set(CSS_CONFIG);
    this.styleUpdates.set({});
    localStorage.removeItem('css-config');
  }

  copyCode() {
    navigator.clipboard.writeText(this.cssCode());
  }

  downloadCode() {
    const blob = new Blob([this.cssCode()], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.css';
    a.click();
    URL.revokeObjectURL(url);
  }

  updateElement(element: any) {
    this.currentElement = element
  }

  public formatInlineCss(cssText: string): string {
    console.log('here', cssText)
    if (!cssText) return '';
    return cssText
      .split(';')
      .map(prop => prop.trim())
      .filter(prop => prop)
      .join(';\n') + ';';
  }
}
