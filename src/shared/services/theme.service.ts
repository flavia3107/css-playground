import { Injectable } from '@angular/core';
import { darkTheme, defaultTheme, Theme } from '../configs/theme.model';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	private _active: Theme = defaultTheme;

	public setActiveTheme(theme: string): void {
		this._active = theme === 'light-theme' ? darkTheme : defaultTheme;

		Object.keys(this._active.properties).forEach(property => {
			document.documentElement.style.setProperty(
				property,
				this._active.properties[property]
			);
		});
	}
}
