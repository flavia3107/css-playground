import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SimpleProperty } from 'src/app/app.config';
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
  public cssConfigService = inject(CssConfigService);

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
    this.cssConfigService.updateProperty(property, value, unit);
  }
}
