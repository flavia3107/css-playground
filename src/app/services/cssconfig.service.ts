import { Injectable, signal, computed, effect } from '@angular/core';
import { CSSSection, CSS_CONFIG } from '../app.config';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  public cssConfig = signal(CSS_CONFIG)
  readonly config = signal<Record<string, any>>({});
  readonly cssCode = computed(() => {
    const entries = Object.entries(this.config());
    const cssLines = entries.map(([key, value]) => `${key}: ${value};`);
    return `.preview-box {\n  ${cssLines.join('\n  ')}\n}`;
  });

  constructor() {
    effect(() => {
      localStorage.setItem('css-config', JSON.stringify(this.config()));
    });
  }

  updateProperty(property: string, value: any) {
    const oldConfig = this.cssConfig();
    const newConfig = oldConfig.map(section => ({
      ...section,
      properties: section.properties.map(prop =>
        prop.name === property ? { ...prop, value } : prop
      )
    }));

    this.cssConfig.set(newConfig);
    this.config.update(current => ({ ...current, [property]: value }));
    console.log('Updated config:', this.cssConfig());
  }

  reset() {
    this.config.set({});
    localStorage.removeItem('css-config');
  }
}
