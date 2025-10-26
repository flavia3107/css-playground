import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CssConfigsComponent } from './components/css-configs/css-configs.component';
import { PreviewComponent } from './components/preview/preview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CssConfigsComponent, PreviewComponent]
})
export class AppComponent {
  title = 'css-playground';
}
