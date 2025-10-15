import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-css-configs',
  templateUrl: './css-configs.component.html',
  styleUrls: ['./css-configs.component.scss'],
  imports: [MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssConfigsComponent {
  readonly panelOpenState = signal(false);

}
