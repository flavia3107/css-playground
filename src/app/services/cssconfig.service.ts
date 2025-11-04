import { Injectable, signal } from '@angular/core';
import { CSS_CONFIG, SHORT_HAND_MAP } from '../app.config';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  readonly cssConfig = signal(CSS_CONFIG);
  readonly styleUpdates = signal<Record<string, any>>({});
  readonly config = signal<Record<string, any>>({});
  readonly cssCode = signal('');

  public updateProperty(property: string, value: any, unit?: string) {
    const newConfig = this._updatePropertyMapping(this.cssConfig(), property, value);

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

  public reset() {
    this.config.set({});
    this.cssConfig.set(CSS_CONFIG);
    this.styleUpdates.set({});
  }

  public copyCode() {
    navigator.clipboard.writeText(this.cssCode());
  }

  public downloadCode() {
    const blob = new Blob([this.cssCode()], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.css';
    a.click();
    URL.revokeObjectURL(url);
  }

  public setCssCode(cssCode: string) {
    this.cssCode.set(this._formatInlineCss(cssCode))
  }

  private _formatInlineCss(cssText: string): string {
    if (!cssText) return '';
    return cssText
      .split(';')
      .map(prop => prop.trim())
      .filter(prop => prop)
      .join(';\n') + ';';
  }

  private _updatePropertyMapping(oldConfig: any, property: any, value: any) {
    return oldConfig.map((section: any) => ({
      ...section,
      properties: section.properties.map((prop: any) => {
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
    }))
  }

}
