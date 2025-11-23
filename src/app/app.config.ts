export const FEATURES = [
	'Add persistence, interactivity, and extra styling categories.',
	'Save preset to localStorage',
	'Load / delete saved presets',
	'Rename presets',
	'Option to lock certain properties before randomizing',
	'Preview Enhancements',
	'Hover / active state toggle',
	'Syntax-highlighted CSS viewer',
	'Copy to Clipboard animation or toast',
	'Reset css line style (like remove gradient to apply background',
	'Color harmony picker (complementary, analogous, triadic)',
	'Download CSS / HTML as a zip',
	'Responsive preview (mobile/tablet/desktop toggle)',
	'Resizable / draggable preview box',
	'Sharing',
	'Screenshot download (canvas or html2canvas)',
	'UI / UX Polish',
	'Smooth transitions on style changes',
	'Micro animations (hover effects, color transitions)',
]

export const ISSUES = [
	'Reset configuration values',
	'Styling on theme change for new elements'
]

export const SHORT_HAND_MAP: Record<string, string[]> = {
	'padding': ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
	'margin': ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
	'border-radius': [
		'border-top-left-radius',
		'border-top-right-radius',
		'border-bottom-right-radius',
		'border-bottom-left-radius'
	]
};

export interface BaseProperty {
	name: string;
	value: string | number | boolean;
	label?: string;
	unit?: string;
	props?: any;
	divider?: boolean;
	mainProp?: string;
	src?: string;
	tooltip: string;
}

export interface SimpleProperty extends BaseProperty {
	type: 'color' | 'text' | 'number' | 'toggle' | 'custom';
	min?: number | null;
	max?: number | null;
	step?: number;
}

export interface SelectProperty extends BaseProperty {
	type: 'select';
	options: string[];
}

export interface BooleanProperty extends BaseProperty {
	type: 'boolean';
}

export type CSSProperty = SimpleProperty | SelectProperty | BooleanProperty;

export interface CSSSection {
	section: string;
	icon: string;
	summary: string;
	tooltip: string;
	properties: CSSProperty[];
}

export const CSS_CONFIG: CSSSection[] = [
	{
		section: 'background',
		icon: 'texture',
		summary: 'Customize background colors, gradients, and opacity.',
		tooltip: 'Controls background-related styles.',
		properties: [
			{ name: 'background-color', value: '#ffffff', type: 'color', label: 'Color', divider: true, tooltip: 'Set the background color.' },
			{
				name: 'background', value: 'linear-gradient(90deg, #3498db, #9b59b6)', type: 'custom', label: 'Gradient',
				tooltip: 'Create and customize a gradient background.', props: [
					{ name: 'type', value: '', type: 'select', options: ['linear', 'radial', 'conic'], label: 'Type', tooltip: 'Choose the gradient type.' },
					{ name: 'angle', value: 0, type: 'number', unit: 'deg', min: 0, max: 360, step: 1, label: 'Angle', tooltip: 'Adjust gradient rotation angle.' },
					{ name: 'startColor', value: '#ffffff', type: 'color', label: 'First Color', tooltip: 'Set the first gradient color.' },
					{ name: 'midColor', value: '#ffffff', type: 'color', label: 'Second Color', tooltip: 'Set the middle gradient color.' },
					{ name: 'endColor', value: '#ffffff', type: 'color', label: 'Third Color', tooltip: 'Set the final gradient color.' }
				]
			},
			// { name: 'background-image', value: '', type: 'text', label: 'Image', tooltip: 'Set a background image URL.' },
			// { name: 'background-size', value: 'auto', type: 'select', options: ['auto', 'cover', 'contain'], label: 'Size', tooltip: 'Define how the background image scales.' },
			// { name: 'background-repeat', value: 'repeat', type: 'select', options: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'], label: 'Repeat', tooltip: 'Choose how the background image repeats.' },
			// { name: 'opacity', value: 1, type: 'number', unit: '', min: 0, max: 1, step: 0.1, label: 'Opacity', tooltip: 'Adjust element transparency.' }
		]
	},
	{
		section: 'border',
		icon: 'rounded_corner',
		summary: 'Adjust border size, color, and style for the element.',
		tooltip: 'Controls border appearance and rounding.',
		properties: [
			{ name: 'border-width', value: 0, type: 'number', unit: 'px', min: 0, max: 20, label: 'Width', tooltip: 'Set the border thickness.' },
			{ name: 'border-style', value: 'none', type: 'select', options: ['none', 'solid', 'dashed', 'dotted', 'double'], label: 'Style', tooltip: 'Choose the border line style.' },
			{ name: 'border-color', value: '#ffffff', type: 'color', label: 'Color', tooltip: 'Set the border color.' },
			{ name: 'border-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius', divider: true, tooltip: 'Round all corners evenly.' },
			{ name: 'border-top-left-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Left', tooltip: 'Round the top-left corner.' },
			{ name: 'border-top-right-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Right', tooltip: 'Round the top-right corner.' },
			{ name: 'border-bottom-left-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Left', tooltip: 'Round the bottom-left corner.' },
			{ name: 'border-bottom-right-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Right', tooltip: 'Round the bottom-right corner.' }
		]
	},
	{
		section: 'box-shadow',
		icon: 'tonality',
		summary: 'Control shadow effects for depth and emphasis.',
		tooltip: 'Controls box shadow appearance.',
		properties: [
			{ name: 'offsetX', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Offset X', tooltip: 'Move the shadow horizontally.' },
			{ name: 'offsetY', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Offset Y', tooltip: 'Move the shadow vertically.' },
			{ name: 'blurRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Blur Radius', tooltip: 'Control how soft the shadow appears.' },
			{ name: 'spreadRadius', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Spread', tooltip: 'Expand or contract the shadow.' },
			{ name: 'shadowColor', value: '#ffffff', type: 'color', label: 'Shadow Color', tooltip: 'Set the shadow color.' }
		]
	},
	{
		section: 'text',
		icon: 'text_fields',
		summary: 'Modify font style, size, weight, and color for text elements.',
		tooltip: 'Controls text styling and formatting.',
		properties: [
			{ name: 'font-family', value: '', type: 'select', options: ['Arial', 'Roboto', 'Georgia', 'Courier New', 'Times New Roman'], label: 'Font Family', tooltip: 'Choose the text font.' },
			{ name: 'font-size', value: 16, type: 'number', unit: 'px', min: 0, max: 1200, label: 'Size', tooltip: 'Set the text size.' },
			{ name: 'font-weight', value: 400, type: 'select', options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], label: 'Weight', tooltip: 'Set the text boldness.' },
			{ name: 'color', value: '#333333', type: 'color', label: 'Color', tooltip: 'Set the text color.' },
			{ name: 'letter-spacing', value: 0, type: 'number', unit: 'px', min: -5, max: 50, label: 'Letter Spacing', tooltip: 'Adjust spacing between letters.' },
			{ name: 'line-height', value: 1.5, type: 'number', min: -10, max: null, step: 0.1, label: 'Line Height', tooltip: 'Set vertical spacing between text lines.' },
			{
				name: 'text-shadow', value: '', type: 'custom', label: 'Text Shadow', tooltip: 'Add and customize a text shadow.', props: [
					{ name: 'offsetX', label: 'Offset X', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1, tooltip: 'Move the shadow horizontally.' },
					{ name: 'offsetY', label: 'Offset Y', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1, tooltip: 'Move the shadow vertically.' },
					{ name: 'blurRadius', label: 'Blur Radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, step: 1, tooltip: 'Control shadow softness.' },
					{ name: 'textShadowColor', label: 'Shadow Color', value: '#ffffff', type: 'color', tooltip: 'Set the shadow color.' }
				]
			},
			{ name: 'textAlign', value: 'center', type: 'select', options: ['left', 'center', 'right', 'justify'], label: 'Align', tooltip: 'Align the text horizontally.' }
		]
	},
	{
		section: 'dimensions',
		icon: 'border_outer',
		summary: 'Set element dimensions and internal/external spacing.',
		tooltip: 'Controls size, padding, and margins.',
		properties: [
			{ name: 'width', value: 0, type: 'number', unit: 'px', min: 0, max: null, label: 'Width', tooltip: 'Set the element width.' },
			{ name: 'height', value: 0, type: 'number', unit: 'px', min: 50, max: null, label: 'Height', tooltip: 'Set the element height.' },
			{
				name: 'padding', value: 0, type: 'custom', label: 'Padding', unit: 'px', tooltip: 'Adjust internal spacing.', props: [
					{ name: 'padding', label: 'Padding', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, divider: true, tooltip: 'Set padding for all sides.' },
					{ name: 'padding-top', label: 'Top', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, tooltip: 'Set top padding.' },
					{ name: 'padding-right', label: 'Right', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, tooltip: 'Set right padding.' },
					{ name: 'padding-bottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, tooltip: 'Set bottom padding.' },
					{ name: 'padding-left', label: 'Left', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, tooltip: 'Set left padding.' }
				]
			},
			{
				name: 'margin', value: 0, type: 'custom', unit: 'px', label: 'Margin', tooltip: 'Adjust external spacing.', props: [
					{ name: 'margin', label: 'Margin', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, divider: true, tooltip: 'Set margin for all sides.' },
					{ name: 'margin-top', label: 'Top', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1, tooltip: 'Set top margin.' },
					{ name: 'margin-right', label: 'Right', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1, tooltip: 'Set right margin.' },
					{ name: 'margin-bottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1, tooltip: 'Set bottom margin.' },
					{ name: 'margin-left', label: 'Left', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1, tooltip: 'Set left margin.' }
				]
			}
		]
	},
	{
		section: 'transform',
		icon: 'transform',
		summary: 'Apply rotation, scaling, and skew transformations.',
		tooltip: 'Modify element transformations.',
		properties: [
			{ name: 'rotate', value: 0, type: 'number', unit: 'deg', min: 0, max: 360, label: 'Rotate', tooltip: 'Rotate the element.' },
			{ name: 'scale', value: 1, type: 'number', min: 0.1, max: 3, step: 0.1, label: 'Scale', tooltip: 'Scale the element size.' },
			{ name: 'translateX', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate X', tooltip: 'Move the element horizontally.' },
			{ name: 'translateY', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate Y', tooltip: 'Move the element vertically.' },
			// { name: 'skew-x', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew X' },
			// { name: 'skew-y', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew Y' },
		]
	},
	{
		section: 'filter',
		icon: 'photo_filter',
		summary: 'Add filter effects such as blur, brightness, or contrast.',
		tooltip: 'Apply visual filter effects.',
		properties: [
			{ name: 'blur', value: 0, type: 'number', unit: 'px', min: 0, max: 20, label: 'Blur', tooltip: 'Apply a blur effect.' },
			{ name: 'brightness', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Brightness', tooltip: 'Adjust element brightness.' },
			{ name: 'contrast', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Contrast', tooltip: 'Adjust contrast levels.' },
			{ name: 'grayscale', value: 0, type: 'number', unit: '%', min: 0, max: 100, label: 'Grayscale', tooltip: 'Convert colors to grayscale.' },
			{ name: 'saturate', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Saturate', tooltip: 'Adjust color saturation.' },
			{ name: 'sepia', value: 0, type: 'number', unit: '%', min: 0, max: 100, label: 'Sepia', tooltip: 'Apply a sepia tone.' }
		]
	},
	// {
	// 	section: 'transition',
	// 	icon: 'animation',
	// 	summary: 'Control animation transitions for smooth style changes.',
	// 	properties: [
	// 		{
	// 			name: 'property', value: 'all', type: 'select', label: 'Property',
	// 			options: ['opacity', 'transform', 'height', 'width', 'background-color', 'all']
	// 		},
	// 		{ name: 'duration', value: 0.0, type: 'number', unit: 's', min: 0, max: null, label: 'Duration' },
	// 		{ name: 'timingFunction', value: 'ease-in-out', type: 'select', options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'], label: 'Timing Function' },
	// 		{ name: 'delay', value: 0, type: 'number', unit: 's', min: 0, max: null, label: 'Delay' }
	// 	]
	// },
	{
		section: 'advanced',
		icon: 'display_settings',
		summary: 'Miscellaneous CSS options for customization.',
		tooltip: 'Additional advanced CSS options.',
		properties: [
			{ name: 'cursor', value: 'pointer', type: 'select', options: ['default', 'pointer', 'text', 'move', 'wait', 'help', 'not-allowed'], label: 'Cursor', tooltip: 'Set the cursor style on hover.' },
			{ name: 'overflow', value: 'auto', type: 'select', options: ['visible', 'hidden', 'scroll', 'auto'], label: 'Overflow', tooltip: 'Control how overflow content is displayed.' },
			{ name: 'zIndex', value: 0, type: 'number', label: 'Z-Index', tooltip: 'Set the stacking order of the element.' },
			{ name: 'mix-blend-mode', value: 'normal', type: 'select', options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'], label: 'Mix Blend Mode', tooltip: 'Change how colors blend with background elements.' }
		]
	}
];

export const ELEMENTS = {
	text: [
		{
			id: 'p', type: 'Paragraph', category: 'Text', defaultStyles: {
				'color': { value: '#555', unit: null },
				'font-size': { value: 14, unit: 'px' },
				'line-height': { value: 1.5, unit: null }
			}
		},
		{
			id: 'h1', type: 'Header 1', category: 'Text', defaultStyles: {
				'color': { value: '#222', unit: null },
				'font-size': { value: 32, unit: 'px' },
				'font-weight': { value: 900, unit: null }
			}
		},
		{
			id: 'h2', type: 'Header 2', category: 'Text', defaultStyles: {
				'color': { value: '#222', unit: null },
				'font-size': { value: 28, unit: 'px' },
				'font-weight': { value: 900, unit: null }
			}
		},
		{
			id: 'h3', type: 'Header 3', category: 'Text', defaultStyles: {
				'color': { value: '#222', unit: null },
				'font-size': { value: 24, unit: 'px' },
				'font-weight': { value: 900, unit: null }
			}
		},
		{
			id: 'span', type: 'Span', category: 'Text', defaultStyles: {
				'color': { value: '#000', unit: null },
				'font-size': { value: 14, unit: 'px' }
			}
		},
		{
			id: 'blockquote', type: 'Blockquote', category: 'Text', defaultStyles: {
				'color': { value: '#666', unit: null },
				'font-size': { value: 16, unit: 'px' },
				'padding-left': { value: 20, unit: 'px' },
				'border-left': { value: '4px solid #ccc', unit: null }
			}
		},
	],
	form: [
		{
			id: 'button', type: 'Button', category: 'Form', defaultStyles: {
				'background-color': { value: '#007bff', unit: null },
				'color': { value: '#fff', unit: null },
				'border-radius': { value: 4, unit: 'px' },
				'padding': { value: 10, unit: 'px' },
				'font-size': { value: 16, unit: 'px' },
				'border': { value: 'none', unit: null },
				'cursor': { value: 'pointer', unit: null }
			}
		},
		{
			id: 'input', type: 'Input', category: 'Form', defaultStyles: {
				'width': { value: 200, unit: 'px' },
				'padding': { value: 8, unit: 'px' },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' },
				'font-size': { value: 16, unit: 'px' }
			}
		},
		{
			id: 'textarea', type: 'Textarea', category: 'Form', defaultStyles: {
				'width': { value: 300, unit: 'px' },
				'height': { value: 100, unit: 'px' },
				'padding': { value: 10, unit: 'px' },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' },
				'font-size': { value: 16, unit: 'px' },
				'resize': { value: 'vertical', unit: null }
			}
		},
		{
			id: 'select', type: 'Select', category: 'Form', defaultStyles: {
				'width': { value: 220, unit: 'px' },
				'padding': { value: 8, unit: 'px' },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' },
				'font-size': { value: 16, unit: 'px' }
			}
		},
		{
			id: 'label', type: 'Label', category: 'Form', defaultStyles: {
				'font-size': { value: 14, unit: 'px' },
				'color': { value: '#333', unit: null }
			}
		},
	],
	layout: [
		{
			id: 'div', type: 'Div', category: 'Layout', defaultStyles: {
				'width': { value: 150, unit: 'px' },
				'height': { value: 150, unit: 'px' },
				'background-color': { value: '#e0e0e0', unit: null },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' }
			}
		},
		{
			id: 'section', type: 'Section', category: 'Layout', defaultStyles: {
				'padding': { value: 20, unit: 'px' },
				'background-color': { value: '#f4f4f4', unit: null }
			}
		},
		{
			id: 'article', type: 'Article', category: 'Layout', defaultStyles: {
				'padding': { value: 20, unit: 'px' },
				'background-color': { value: '#fff', unit: null },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' }
			}
		},
		{
			id: 'header', type: 'Header', category: 'Layout', defaultStyles: {
				'padding': { value: 20, unit: 'px' },
				'background-color': { value: '#222', unit: null },
				'color': { value: '#fff', unit: null }
			}
		},
		{
			id: 'footer', type: 'Footer', category: 'Layout', defaultStyles: {
				'padding': { value: 20, unit: 'px' },
				'background-color': { value: '#333', unit: null },
				'color': { value: '#fff', unit: null }
			}
		},
		{
			id: 'nav', type: 'Nav', category: 'Layout', defaultStyles: {
				'padding': { value: 10, unit: 'px' },
				'background-color': { value: '#007bff', unit: null },
				'color': { value: '#fff', unit: null }
			}
		},
	],
	media: [
		{
			id: 'img', type: 'Image', category: 'Media', src: './assets/images/img.jpg', defaultStyles: {
				'width': { value: 150, unit: 'px' },
				'height': { value: 150, unit: 'px' },
				'border-radius': { value: 8, unit: 'px' },
				'object-fit': { value: 'cover', unit: null },

			}
		}
	],
	// list: [
	// 	{
	// 		id: 'ul', type: 'Unordered List', category: 'List', defaultStyles: {
	// 			'padding-left': { value: 20, unit: 'px' },
	// 			'color': { value: '#333', unit: null }
	// 		}
	// 	},
	// 	{
	// 		id: 'ol', type: 'Ordered List', category: 'List', defaultStyles: {
	// 			'padding-left': { value: 20, unit: 'px' },
	// 			'color': { value: '#333', unit: null }
	// 		}
	// 	},
	// 	{
	// 		id: 'li', type: 'List Item', category: 'List', defaultStyles: {
	// 			'margin-bottom': { value: 5, unit: 'px' }
	// 		}
	// 	},
	// ],
	// table: [
	// 	{
	// 		id: 'table', type: 'Table', category: 'Table', defaultStyles: {
	// 			'border-collapse': { value: 'collapse', unit: null },
	// 			'width': { value: 100, unit: '%' }
	// 		}
	// 	},
	// 	{
	// 		id: 'thead', type: 'Table Head', category: 'Table', defaultStyles: {
	// 			'background-color': { value: '#f4f4f4', unit: null }
	// 		}
	// 	},
	// 	{ id: 'tbody', type: 'Table Body', category: 'Table', defaultStyles: {} },
	// 	{ id: 'tr', type: 'Table Row', category: 'Table', defaultStyles: {} },
	// 	{
	// 		id: 'td', type: 'Table Cell', category: 'Table', defaultStyles: {
	// 			'border': { value: '1px solid #ccc', unit: null },
	// 			'padding': { value: 8, unit: 'px' }
	// 		}
	// 	},
	// 	{
	// 		id: 'th', type: 'Table Header', category: 'Table', defaultStyles: {
	// 			'border': { value: '1px solid #ccc', unit: null },
	// 			'padding': { value: 8, unit: 'px' },
	// 			'background-color': { value: '#f4f4f4', unit: null }
	// 		}
	// 	},
	// ],
	inline: [
		{
			id: 'a', type: 'Anchor', category: 'Inline', defaultStyles: {
				'color': { value: '#007bff', unit: null },
				'text-decoration': { value: 'underline', unit: null }
			}
		},
		{
			id: 'strong', type: 'Strong', category: 'Inline', defaultStyles: {
				'font-weight': { value: 'bold', unit: null }
			}
		},
		{
			id: 'em', type: 'Emphasis', category: 'Inline', defaultStyles: {
				'font-style': { value: 'italic', unit: null }
			}
		},
		{
			id: 'code', type: 'Code', category: 'Inline', defaultStyles: {
				'font-family': { value: 'monospace', unit: null },
				'background-color': { value: '#f4f4f4', unit: null },
				'padding': { value: 4, unit: 'px' },
				'border-radius': { value: 4, unit: 'px' }
			}
		},
	],
	interactive: [
		{
			id: 'details', type: 'Details', category: 'Interactive', defaultStyles: {
				'padding': { value: 20, unit: 'px' },
				'border': { value: '1px solid #ccc', unit: null },
				'border-radius': { value: 4, unit: 'px' }
			}
		},
		{
			id: 'summary', type: 'Summary', category: 'Interactive', defaultStyles: {
				'font-weight': { value: 'bold', unit: null },
				'cursor': { value: 'pointer', unit: null }
			}
		}
	]
};

export const MULTI_VALUE_MAP: Record<string, { parts: string[]; formatter: (values: Record<string, any>) => string }> = {
	'box-shadow': {
		parts: ['offsetX', 'offsetY', 'blurRadius', 'spreadRadius', 'shadowColor'],
		formatter: ({ offsetX, offsetY, blurRadius, spreadRadius, shadowColor }) =>
			`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
	},
	'text-shadow': {
		parts: ['offsetX', 'offsetY', 'blurRadius', 'textShadowColor'],
		formatter: ({ offsetX, offsetY, blurRadius, textShadowColor }) =>
			`${offsetX}px ${offsetY}px ${blurRadius}px ${textShadowColor}`,
	},
	outline: {
		parts: ['width', 'style', 'color'],
		formatter: ({ width, style, color }) => `${width}px ${style} ${color}`,
	},
	transform: {
		parts: ['rotate', 'scale', 'translateX', 'translateY'],
		formatter: ({ rotate, scale, translateX, translateY }) =>
			`rotate(${rotate}deg) scale(${scale}) translate(${translateX}px, ${translateY}px)`,
	},
	background: {
		parts: ['type', 'angle', 'startColor', 'midColor', 'endColor'],
		formatter: ({ type = 'linear', angle = 90, startColor, midColor, endColor }) => {
			const colors = [startColor, midColor, endColor].filter(Boolean).join(', ');

			switch (type) {
				case 'radial':
					return `radial-gradient(circle, ${colors})`;
				case 'conic':
					return `conic-gradient(from ${angle}deg, ${colors})`;
				default:
					return `linear-gradient(${angle}deg, ${colors})`;
			}
		},
	},
	transition: {
		parts: ['property', 'duration', 'timingFunction', 'delay'],
		formatter: ({ property, duration, timingFunction, delay }) =>
			`${property} ${duration}s ${timingFunction} ${delay}s`,
	},
	filter: {
		parts: ['blur', 'brightness', 'contrast', 'grayscale', 'hueRotate', 'invert', 'opacity', 'saturate', 'sepia', 'dropShadow'],
		formatter: ({ blur, brightness, contrast, grayscale, hueRotate, invert, opacity, saturate, sepia, dropShadow }) =>
			[
				blur ? `blur(${blur}px)` : '',
				brightness ? `brightness(${brightness})` : '',
				contrast ? `contrast(${contrast}%)` : '',
				grayscale ? `grayscale(${grayscale}%)` : '',
				hueRotate ? `hue-rotate(${hueRotate}deg)` : '',
				invert ? `invert(${invert}%)` : '',
				opacity ? `opacity(${opacity})` : '',
				saturate ? `saturate(${saturate}%)` : '',
				sepia ? `sepia(${sepia}%)` : '',
				dropShadow ? `drop-shadow(${dropShadow.x}px ${dropShadow.y}px ${dropShadow.blur}px ${dropShadow.color})` : ''
			].filter(Boolean).join(' ')
	}
};

/**
 *  to do:
 *  - style for hover + transition
 * 	- pseudo-classes
 * 	- display,
 */