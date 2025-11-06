import { Injectable } from '@angular/core';
import { darkTheme, defaultTheme } from '../configs/theme.model';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	public setActiveTheme(theme: string): void {
		const activeTheme = theme === 'light-theme' ? defaultTheme : darkTheme;
		localStorage.setItem('theme', theme);

		Object.keys(activeTheme.properties).forEach(property => {
			document.documentElement.style.setProperty(
				property,
				activeTheme.properties[property]
			);
		});
	}
}
