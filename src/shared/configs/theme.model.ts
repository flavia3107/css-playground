export interface Theme {
	name: string;
	properties: { [key: string]: string };
}

export const defaultTheme: Theme = {
	name: "defaultTheme",
	properties: {
		"--bg-color": "#f7f6f7",
		"--gray": "#d3d3d3"
	}
};

export const darkTheme: Theme = {
	name: "darkTheme",
	properties: {
		"--bg-color": "red"

	}
};

