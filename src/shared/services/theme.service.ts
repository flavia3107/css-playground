import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	theme = signal<'light' | 'dark'>('light');

	constructor() {
		const stored = localStorage.getItem('theme');
		if (stored === 'dark') this.setDarkTheme();
	}

	setLightTheme() {
		document.body.classList.remove('dark-theme');
		this.theme.set('light');
		localStorage.setItem('theme', 'light');
	}

	setDarkTheme() {
		document.body.classList.add('dark-theme');
		this.theme.set('dark');
		localStorage.setItem('theme', 'dark');
	}

	toggleTheme() {
		if (this.theme() === 'dark') this.setLightTheme();
		else this.setDarkTheme();
	}
}
