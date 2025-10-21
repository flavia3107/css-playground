import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input-fields',
  templateUrl: './custom-input-fields.component.html',
  styleUrls: ['./custom-input-fields.component.scss'],
  imports: [FormsModule]
})
export class CustomInputFieldsComponent {
  properties = input<any[]>();
  label = input<string>();
  valueChange = output<any[]>();

  update() {
  }
}
