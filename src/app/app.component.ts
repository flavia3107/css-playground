import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CssCodeComponent } from './components/css-code/css-code.component';
import { CssConfigsComponent } from './components/css-configs/css-configs.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CssConfigService } from './services/cssconfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CssConfigsComponent, PreviewComponent, CssCodeComponent]
})
export class AppComponent {
  private _cssConfigService = inject(CssConfigService);

  copyCode() {
    this._cssConfigService.copyCode();
  }

  downloadCode() {
    this._cssConfigService.downloadCode();
  }
}
