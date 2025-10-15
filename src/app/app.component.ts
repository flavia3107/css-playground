import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CssConfigsComponent } from './components/css-configs/css-configs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, CssConfigsComponent]
})
export class AppComponent {
  title = 'css-playground';
}
