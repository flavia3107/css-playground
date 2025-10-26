import { Component } from '@angular/core';
import { ELEMENTS } from 'src/app/app.config';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  readonly elements = ELEMENTS;

}
