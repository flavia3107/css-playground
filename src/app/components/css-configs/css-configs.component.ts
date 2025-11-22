import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CSSProperty } from 'src/app/app.config';
import { CssConfigService } from '../../services/cssconfig.service';
import { CustomInputFieldsComponent } from '../custom-input-fields/custom-input-fields.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-css-configs',
  templateUrl: './css-configs.component.html',
  styleUrls: ['./css-configs.component.scss'],
  imports: [MatExpansionModule, MatIconModule, CustomInputFieldsComponent, FormsModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssConfigsComponent {
  public cssConfigService = inject(CssConfigService);

  public increase(property: CSSProperty, section: string) {
    if (typeof property.value === 'number') {
      property.value++;
      this.updateProperty(property, section);
    }
  }

  public decrease(property: CSSProperty, section: string) {
    if (typeof property.value === 'number') {
      property.value--;
      this.updateProperty(property, section);
    }
  }

  public updateProperty(property: CSSProperty, section?: string) {
    this.cssConfigService.updateProperty(property.name, this.cssConfigService.transformValue(property.name, property.value), property.unit);
    this.cssConfigService.mapCssProperties(section ?? '')
  }
}
