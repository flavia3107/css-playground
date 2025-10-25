import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CssConfigService {
  readonly config = signal<Record<string, any>>({});
  // readonly cssCode = computed(() => {
  //   const entries = Object.entries(this.config());
  //   const cssLines = entries.map(([key, value]) => `${key}: ${value};`);
  //   return `.preview-box {\n  ${cssLines.join('\n  ')}\n}`;
  // });

  // constructor() {
  //   effect(() => {
  //     localStorage.setItem('css-config', JSON.stringify(this.config()));
  //   });
  // }

  updateProperty(property: string, value: any) {
    this.config.update((current) => ({ ...current, [property]: value }));
  }

  reset() {
    this.config.set({});
    localStorage.removeItem('css-config');
  }
}
