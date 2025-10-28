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
    let newConfig = this.cssConfig();
    const allProps = ([] as any[]).concat(...newConfig.map(section => section.properties));
    const prop = allProps.find(p => p.name === property);

    if (prop)
      prop.value = value;

    this.cssConfig.set(newConfig);
    this.config.update((current) => ({ ...current, [property]: value }));
    console.log('config', this.cssConfig())
  }

  reset() {
    this.config.set({});
    localStorage.removeItem('css-config');
  }
}
