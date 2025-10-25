import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleProperty } from 'src/app/app.config';
import { CssConfigService } from 'src/app/services/cssconfig.service';

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

  constructor(private _cssConfigService: CssConfigService) { }

  public increase(property: SimpleProperty) {
    if (typeof property.value === 'number')
      property.value++;
    this.updateProperty(property.name, property.value)

  }

  public decrease(property: SimpleProperty) {
    if (typeof property.value === 'number')
      property.value--;
    this.updateProperty(property.name, property.value)
  }

  public updateProperty(property: string, value: string | number | boolean) {
    console.log('PROP', property, value)
    this._cssConfigService.reset();
  }
}
