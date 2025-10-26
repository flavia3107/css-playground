import { KeyValuePipe } from '@angular/common';
import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { ELEMENTS } from 'src/app/app.config';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  imports: [KeyValuePipe, MatButtonModule, MatMenuModule]
})
export class PreviewComponent {
  private _renderer = inject(Renderer2);
  readonly elements = ELEMENTS;
  @ViewChild('previewContainer', { static: true }) previewContainer!: ElementRef<HTMLDivElement>;

  insertElement(element: any) {
    console.log('Element', element)
    const container = this.previewContainer.nativeElement;

    if (container.children.length > 0) {
      console.log('Clearing old preview...');
      this._renderer.removeChild(container, container.firstChild);
    }


    const el = this._renderer.createElement(element.id);
    const text = this._renderer.createText(element.label || element.type);
    this._renderer.appendChild(el, text);

    for (const [key, value] of Object.entries(element.defaultStyles)) {
      this._renderer.setStyle(el, key, value as string);
    }

    this._renderer.appendChild(container, el);
  }
}
