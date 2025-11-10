import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ThemeService } from 'src/shared/services/theme.service';
import { CssCodeComponent } from './components/css-code/css-code.component';
import { CssConfigsComponent } from './components/css-configs/css-configs.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CssConfigService } from './services/cssconfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CssConfigsComponent, PreviewComponent, CssCodeComponent, MatButtonModule, MatIconModule]
})
export class AppComponent {
  private _cssConfigService = inject(CssConfigService);
  private _themeService = inject(ThemeService);
  public activeTheme = 'light-theme';

  constructor() {
    this._themeService.setActiveTheme(localStorage.getItem('theme') ?? this.activeTheme);
  }

  public toggleTheme(): void {
    this.activeTheme = this.activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this._themeService.setActiveTheme(this.activeTheme);
  }

  copyCode() {
    this._cssConfigService.copyCode();
  }

  downloadCode() {
    this._cssConfigService.downloadCode();
  }

  reset() {
    this._cssConfigService.reset();
  }

  randomizeStyles() {
    this._cssConfigService.generateRandomStyle();
  }
}
