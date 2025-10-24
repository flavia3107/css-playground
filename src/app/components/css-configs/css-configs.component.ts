import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CSS_CONFIG } from 'src/app/app.config';
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

  public increase() {

  }

  public decrease() {

  }
}
