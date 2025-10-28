import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { CSS_CONFIG } from '../app.config';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  public cssConfig = signal(CSS_CONFIG)
  readonly config = signal<Record<string, any>>({});
  readonly cssCode = computed(() => {
    const entries = Object.entries(this.config());
    const cssLines = entries.map(([key, value]) => `${key}: ${value};`);
    return `.preview-box {\n  ${cssLines.join('\n  ')}\n}`;
  });
  styleUpdates = signal<{ property: string; value: any } | null>(null);

  constructor() {
    effect(() => {
      localStorage.setItem('css-config', JSON.stringify(this.config()));
    });
  }

  updateProperty(property: string, value: any, unit?: string) {
    const oldConfig = this.cssConfig();
    const newConfig = oldConfig.map(section => ({
      ...section,
      properties: section.properties.map(prop =>
        prop.name === property ? { ...prop, value } : prop
      )
    }));

    this.cssConfig.set(newConfig);
    this.config.update(current => ({ ...current, [property]: value }));
    this.styleUpdates.set({ property, value: `${value}${unit ?? ''}` });
  }

  reset() {
    this.config.set({});
    localStorage.removeItem('css-config');
  }
}
