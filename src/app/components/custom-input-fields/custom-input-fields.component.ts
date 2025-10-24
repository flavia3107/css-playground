import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleProperty } from 'src/app/app.config';

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

  public increase(property: SimpleProperty) {
    if (typeof property.value === 'number')
      property.value++;
  }

  public decrease(property: SimpleProperty) {
    if (typeof property.value === 'number')
      property.value--;
  }
}
