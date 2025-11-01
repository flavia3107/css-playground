import { KeyValuePipe } from '@angular/common';
import { Component, effect, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { ELEMENTS } from 'src/app/app.config';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CssConfigService } from 'src/app/services/cssconfig.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  imports: [KeyValuePipe, MatButtonModule, MatMenuModule]
})
export class PreviewComponent {
  private _renderer = inject(Renderer2);
  private _cssConfigService = inject(CssConfigService);
  readonly elements = ELEMENTS;
  private _currentElement?: HTMLElement;
  @ViewChild('previewContainer', { static: true }) previewContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => {
      const styles = this._cssConfigService.styleUpdates();
      if (!this._currentElement) return;

      for (const [key, val] of Object.entries(styles)) {
        this._renderer.setStyle(this._currentElement, key, val);
      }
    });
  }

  insertElement(element: any) {
    const container = this.previewContainer.nativeElement;

    if (container.children.length > 0) {
      this._renderer.removeChild(container, container.firstChild);
      this._cssConfigService.reset();
    }

    const el = this._renderer.createElement(element.id);
    const text = this._renderer.createText(element.label || element.type);
    this._renderer.appendChild(el, text);

    for (const [key, value] of Object.entries(element.defaultStyles as Record<string, { value: number | string, unit: string }>)) {
      this._renderer.setStyle(el, key, `${value['value']}${value['unit'] ?? ''}`);
      this._cssConfigService.updateProperty(key, value['value'], value['unit']);
    }

    this._renderer.appendChild(container, el);
    this._currentElement = el;
  }
}
