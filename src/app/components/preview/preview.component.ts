import { KeyValuePipe } from '@angular/common';
import { Component, effect, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { ELEMENTS } from 'src/app/app.config';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CssConfigService } from 'src/app/services/cssconfig.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  imports: [KeyValuePipe, MatButtonModule, MatMenuModule, MatTooltipModule]
})
export class PreviewComponent {
  private _renderer = inject(Renderer2);
  private _cssConfigService = inject(CssConfigService);
  readonly elements = ELEMENTS;
  private _currentElement?: HTMLElement;
  private _currentType: any;
  @ViewChild('previewContainer', { static: true }) previewContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    effect(() => this._styleUpdateRefresh());
  }

  private _applyStyle(prop: string, val: any) {
    if (val === '' || val == null) {
      this._renderer.removeStyle(this._currentElement, prop);
    } else {
      this._renderer.setStyle(this._currentElement, prop, val);
    }
  }

  insertElement(element: any) {
    const container = this.previewContainer.nativeElement;
    if (container.children.length > 0) {
      const oldEl = container.firstChild as HTMLElement;
      this._renderer.removeChild(container, oldEl);
    }
    this._cssConfigService.reset();

    const el = this._renderer.createElement(element.id);
    if (element.id === 'img') {
      this._renderer.setAttribute(el, 'src', element.src);
    }
    const text = this._renderer.createText(element.label || element.type);
    this._renderer.appendChild(el, text);
    el.removeAttribute('style');

    for (const [key, value] of Object.entries(element.defaultStyles as Record<string, { value: number | string; unit?: string }>)) {
      const val = `${value['value']}${value['unit'] ?? ''}`;
      this._renderer.setStyle(el, key, val);
      this._cssConfigService.updateProperty(key, value['value'], value['unit']);
    }

    this._renderer.appendChild(container, el);
    this._currentElement = el;
    this._currentType = element;
    this._cssConfigService.elementExists.set(true);
    this._cssConfigService.setCssCode(this._currentElement?.style?.cssText ?? '');
  }

  private _styleUpdateRefresh() {

    const update = this._cssConfigService.styleUpdates();
    if (!this._currentElement) return;

    if (!update || (typeof update === 'object' && Object.keys(update).length === 0)) {
      this.insertElement(this._currentType);
    } else if ('property' in update) {
      this._applyStyle(update['property'], update['value']);
    } else {
      for (const [prop, val] of Object.entries(update)) {
        this._applyStyle(prop, val);
      }
    }
    this._cssConfigService.setCssCode(this._currentElement?.style?.cssText ?? '');

  }
}
