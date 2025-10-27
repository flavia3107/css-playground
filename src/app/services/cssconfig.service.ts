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

  updateProperty(property: string, value: any, section?: string) {
    let newConfig = this.cssConfig();
    if (section) {
      const indx: number = newConfig.findIndex(config => config.section === section);
      console.log('here', newConfig[indx])
      // newConfig[indx][property].value = value;

    }
    this.config.update((current) => ({ ...current, [property]: value }));
  }

  reset() {
    this.config.set({});
    localStorage.removeItem('css-config');
  }
}
