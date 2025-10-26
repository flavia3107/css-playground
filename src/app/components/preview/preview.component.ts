import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
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
  readonly elements = ELEMENTS;

}
