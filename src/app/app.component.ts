import { Component, effect, ElementRef, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ThemeService } from 'src/shared/services/theme.service';
import { FEATURES, ISSUES } from './app.config';
import { CssCodeComponent } from './components/css-code/css-code.component';
import { CssConfigsComponent } from './components/css-configs/css-configs.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CssConfigService } from './services/cssconfig.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CssConfigsComponent, PreviewComponent, CssCodeComponent, MatButtonModule, MatIconModule, MatTooltipModule, MatMenuModule]
})
export class AppComponent {
  private _cssConfigService = inject(CssConfigService);
  private _themeService = inject(ThemeService);
  public activeTheme = localStorage.getItem('theme') ?? 'light-theme';
  public features = FEATURES;
  public issues = ISSUES;
  public copied: boolean = false;
  public downloaded: boolean = false;
  public shuffled: boolean = false;
  public elementExists = true;
  @ViewChild('captureArea') captureArea!: ElementRef;

  constructor() {
    effect(() => this.elementExists = this._cssConfigService.elementExists());
    this._themeService.setActiveTheme(localStorage.getItem('theme') ?? this.activeTheme);
  }

  public toggleTheme(): void {
    this.activeTheme = this.activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this._themeService.setActiveTheme(this.activeTheme);
  }

  copyCode() {
    this._cssConfigService.copyCode();
    this.copied = true;
    setTimeout(() => (this.copied = false), 1200);
  }

  downloadCode() {
    this._cssConfigService.downloadCode();
    this.downloaded = true;
    setTimeout(() => (this.downloaded = false), 1200);
  }

  reset() {
    this._cssConfigService.reset();
  }

  randomizeStyles() {
    this._cssConfigService.generateRandomStyle();
    this.shuffled = true;
    setTimeout(() => (this.shuffled = false), 1200);
  }

  downloadScreenshot() {
    this._cssConfigService.downloadScreenshot(this.captureArea);
  }
}
