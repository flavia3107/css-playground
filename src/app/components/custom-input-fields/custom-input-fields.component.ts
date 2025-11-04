import { Component, inject, input, output } from '@angular/core';
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
  private _cssConfigService = inject(CssConfigService);
  properties = input<any[]>();
  label = input<string>();
  valueChange = output<any[]>();

  public increase(property: SimpleProperty) {
    if (typeof property.value === 'number') {
      property.value++;
      this.updateProperty(property.name, property.value, property.unit);
    }
  }

  public decrease(property: SimpleProperty) {
    if (typeof property.value === 'number') {
      property.value--;
      this.updateProperty(property.name, property.value, property.unit);
    }
  }

  public updateProperty(property: string, value: string | number | boolean, unit?: string) {
    this._cssConfigService.updateProperty(property, value, unit);
    // this._cssConfigService.updateCssCode();
  }
}
