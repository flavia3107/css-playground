import { Injectable, signal } from '@angular/core';
import { CSS_CONFIG, MULTI_VALUE_MAP, SHORT_HAND_MAP } from '../app.config';

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
    this.styleUpdates.update(current => ({ ...current, [property]: unit && typeof value === 'number' ? `${value}${unit}` : value }));

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

  public generateRandomStyle() {
    const randomStyle: Record<string, string> = {
      'background-color': this._getRandomColor(),
      'border-width': `${this._getRandomNumber(0, 5)}px`,
      'border-style': 'solid',
      'border-color': this._getRandomColor(),
      'border-radius': `${this._getRandomNumber(0, 30)}px`,
      'box-shadow': this._getRandomShadow(),
      'padding': `${this._getRandomNumber(0, 40)}px`,
      'margin': `${this._getRandomNumber(0, 40)}px`
    };

    for (const [key, value] of Object.entries(randomStyle)) {
      const numericValue = parseFloat(value);
      const unit = value.replace(/[0-9.\-]/g, '') || 'px';
      this.updateProperty(key, isNaN(numericValue) ? value : numericValue, unit);
    }

    this.config.set(randomStyle);
  }

  private _getRandomColor(): string {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    return `#${random.padStart(6, '0')}`;
  }

  private _getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private _getRandomShadow(): string {
    const x = this._getRandomNumber(0, 10);
    const y = this._getRandomNumber(0, 10);
    const blur = this._getRandomNumber(5, 30);
    const color = this._getRandomColor();
    return `${x}px ${y}px ${blur}px ${color}`;
  }

  public mapCssProperties(section: string, proerty?: string) {
    const property = MULTI_VALUE_MAP[section];
    console.log('here', section, proerty)

    if (property) {
      const config = this.cssConfig().find(config => config.section === section)?.properties.map(prop => ({ [prop.name]: prop.value }));
      // handle nested properties - sections

      const result = (config || []).reduce((acc, obj) => Object.assign(acc, obj), {});
      const value = property.formatter(result);
      this.config.update(current => ({ ...current, [section]: `${value}` }));
      this.styleUpdates.update(current => ({ ...current, [section]: `${value}` }));
    }
  }
  /**
   *  to do: 
   *  - reverse mapping - from insert apply to config
   *  - gradient
   *  - transform
   * 
   */


}
