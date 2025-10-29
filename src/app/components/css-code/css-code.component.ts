import { Component, inject } from '@angular/core';
import { CssConfigService } from 'src/app/services/cssconfig.service';

@Component({
  selector: 'app-css-code',
  templateUrl: './css-code.component.html',
  styleUrls: ['./css-code.component.scss']
})
export class CssCodeComponent {
  private _cssConfigService = inject(CssConfigService);
  cssCode = this._cssConfigService.cssCode;
}
