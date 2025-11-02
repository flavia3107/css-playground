export interface Theme {
	name: string;
	properties: { [key: string]: string };
}

export const defaultTheme: Theme = {
	name: 'defaultTheme',
	properties: {
		'--main-text': '#000',
		'--bg-color': '#f7f6f7',
		'--gray': '#d3d3d3',
		'--card-bg-color': '#fefefe',
		'--gray-light-color': '#f0f0f0',
		'--secondary-bg-color': '#f8f8f8',
		'--light-gray-border': '#c0c0c0',
		'--mid-gray': '#888',
		'--darker-gray-border': '#ddd',
		'--dark-gray': '#5b5b5b',
		'--logo-text': '#252525',
		'--panel-title': '#5e5e5e',
		'--description-text': '#818181',
		'--light-divider': '#ccc',
		'--secondary-text': '#7c7c7c',
		'--input-container-bg': '#f8f8f8'
	}
};

export const darkTheme: Theme = {
	name: 'darkTheme',
	properties: {
		'--main-text': '#fff',
		'--bg-color': '#222222',
		'--gray': '#474747',
		'--card-bg-color': '#292929',
		'--gray-light-color': '#161616',
		'--secondary-bg-color': '#f3f3f3',
		'--light-gray-border': '#dfdfdf',
		'--mid-gray': 'brown',
		'--dark-gray': 'coral',
		'--darker-gray-border': '#000',
		'--logo-text': '#fff',
		'--panel-title': '#dce4ef',
		'--description-text': 'lightgray',
		'--light-divider': '#585858',
		'--secondary-text': 'turquise',
		'--input-container-bg': '#2d2d2d'
	}
};

