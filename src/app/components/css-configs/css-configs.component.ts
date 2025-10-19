import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CSS_CONFIG } from 'src/app/app.config';
import { CamelToWordsPipe } from 'src/shared/custom-pipes/camel-to-words.pipe';
import { CustomInputFieldsComponent } from '../custom-input-fields/custom-input-fields.component';

@Component({
  selector: 'app-css-configs',
  templateUrl: './css-configs.component.html',
  styleUrls: ['./css-configs.component.scss'],
  imports: [MatExpansionModule, MatIconModule, CamelToWordsPipe, CustomInputFieldsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssConfigsComponent {
  readonly panelOpenState = signal(false);
  readonly cssConfigs = CSS_CONFIG;
}
