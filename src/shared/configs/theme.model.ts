export interface Theme {
	name: string;
	properties: { [key: string]: string };
}

export const defaultTheme: Theme = {
	name: 'defaultTheme',
	properties: {
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
		'--secondary-text': '#7c7c7c'
	}
};

export const darkTheme: Theme = {
	name: 'darkTheme',
	properties: {
		'--bg-color': 'red',
		'--gray': 'blue',
		'--card-bg-color': 'yellow',
		'--gray-light-color': 'purple',
		'--secondary-bg-color': 'green',
		'--light-gray-border': 'pink',
		'--mid-gray': 'brown',
		'--dark-gray': 'coral',
		'--darker-gray-border': '#000',
		'--logo-text': '#fff',
		'--panel-title': 'salmon',
		'--description-text': 'lightgray',
		'--light-divider': 'orange',
		'--secondary-text': 'turquise'
	}
};

