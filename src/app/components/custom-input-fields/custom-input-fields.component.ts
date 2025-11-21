import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSSProperty } from 'src/app/app.config';
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
  section = input<string>('');
  nestedProperty = input<string>('');
  valueChange = output<any[]>();

  public increase(property: CSSProperty) {
    if (typeof property.value === 'number') {
      property.value++;
      this.updateProperty(property);
    }
  }

  public decrease(property: CSSProperty) {
    if (typeof property.value === 'number') {
      property.value--;
      this.updateProperty(property);
    }
  }

  public updateProperty(property: CSSProperty) {
    this._cssConfigService.updateProperty(property.name, property.value, property.unit);
    this._cssConfigService.mapCssProperties(this.section(), this.nestedProperty())
  }
}
