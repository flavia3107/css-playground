import { Injectable, signal, computed, effect } from '@angular/core';
import { CSS_CONFIG } from '../app.config';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  public cssConfig = signal(CSS_CONFIG)
  readonly config = signal<Record<string, any>>({});
  readonly cssCode = computed(() => {
    const entries = Object.entries(this.config());
    const cssLines = entries.map(([key, value]) => `${key}: ${value};`);
    return entries.length ? `.preview-box {\n  ${cssLines.join('\n  ')}\n}` : '';
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
    this.cssConfig.set(CSS_CONFIG);
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
}
