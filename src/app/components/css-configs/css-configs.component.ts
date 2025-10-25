import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { inject } from '@angular/core/primitives/di';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CSS_CONFIG, SimpleProperty } from 'src/app/app.config';
import { CssConfigService } from '../../services/cssconfig.service';
import { CustomInputFieldsComponent } from '../custom-input-fields/custom-input-fields.component';

@Component({
  selector: 'app-css-configs',
  templateUrl: './css-configs.component.html',
  styleUrls: ['./css-configs.component.scss'],
  imports: [MatExpansionModule, MatIconModule, CustomInputFieldsComponent, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssConfigsComponent {
  readonly panelOpenState = signal(false);
  readonly cssConfigs = CSS_CONFIG;

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
