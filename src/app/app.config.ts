export const STATES = {
	phase_2: [
		'Add persistence, interactivity, and extra styling categories.',
		'Save preset to localStorage',
		'Load / delete saved presets',
		'Rename presets',
		'Option to lock certain properties before randomizing',
		'Gradient backgrounds (linear/radial)',
		'Text shadow',
		'Preview Enhancements',
		'Hover / active state toggle',
		'Syntax-highlighted CSS viewer',
		'Copy to Clipboard animation or toast'
	],
	phase_3: [
		'Color harmony picker (complementary, analogous, triadic)',
		'Download CSS / HTML as a zip',
		'Preview & Layout',
		'Responsive preview (mobile/tablet/desktop toggle)',
		'Resizable / draggable preview box',
		'Sharing',
		'Screenshot download (canvas or html2canvas)',
		'UI / UX Polish',
		'Smooth transitions on style changes',
		'Micro animations (hover effects, color transitions)',
		'Tooltips with property explanations'
	]
}

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
	properties: CSSProperty[];
}

export const CSS_CONFIG: CSSSection[] = [
	{
		section: 'background',
		icon: 'texture',
		summary: 'Customize background colors, gradients, and opacity.',
		properties: [
			{ name: 'background-color', value: '#ffffff', type: 'color', 'label': 'Color', divider: true },
			{
				name: 'background-gradient', value: 'linear-gradient(90deg, #3498db, #9b59b6)', type: 'custom', label: 'Gradient', divider: true, props: [
					{ name: 'type', value: '', type: 'select', options: ['linear', 'radial', 'conic'], label: 'Type' },
					{ name: 'angle', value: 0, type: 'number', unit: 'deg', min: 0, max: 360, step: 1, label: 'Angle' },
					{ name: 'startColor', type: 'color', value: '#ffffff', label: 'First Color' },
					{ name: 'midColor', type: 'color', value: '#ffffff', label: 'Second Color' },
					{ name: 'endColor', type: 'color', value: '#ffffff', label: 'Third Color' }

				]
			},
			{ name: 'background-image', value: '', type: 'text', label: 'Image' },
			{ name: 'background-size', value: 'auto', type: 'select', options: ['auto', 'cover', 'contain'], label: 'Size' },
			{ name: 'background-repeat', value: 'repeat', type: 'select', options: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'], label: 'Repeat' },
			{ name: 'opacity', value: 1, type: 'number', unit: '', min: 0, max: 1, step: 0.1, label: 'Opacity' }
		]
	},
	{
		section: 'border',
		icon: 'rounded_corner',
		summary: 'Adjust border size, color, and style for the element.',
		properties: [
			{ name: 'border-width', value: 0, type: 'number', unit: 'px', min: 0, max: 20, label: 'Width' },
			{ name: 'border-style', value: 'none', type: 'select', options: ['none', 'solid', 'dashed', 'dotted', 'double'], label: 'Style' },
			{ name: 'border-color', value: '#ffffff', type: 'color', label: 'Color' },
			{ name: 'border-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius', divider: true },
			{ name: 'border-top-left-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Left' },
			{ name: 'border-top-right-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Right' },
			{ name: 'border-bottom-left-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Left' },
			{ name: 'border-bottom-right-radius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Right' }
		]
	},
	{
		section: 'box-shadow',
		icon: 'tonality',
		summary: 'Control shadow effects for depth and emphasis.',
		properties: [
			{ name: 'offsetX', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Offset X' },
			{ name: 'offsetY', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Offset Y' },
			{ name: 'blurRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Blur Radius' },
			{ name: 'spreadRadius', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Spread' },
			{ name: 'shadowColor', value: '#ffffff', type: 'color', label: 'Shadow Color' },
			{ name: 'box-shadow-inset', value: false, type: 'toggle', label: 'Inset' }
		]
	},
	{
		section: 'text',
		icon: 'text_fields',
		summary: 'Modify font style, size, weight, and color for text elements.',
		properties: [
			{ name: 'font-family', value: '', type: 'select', options: ['Arial', 'Roboto', 'Georgia', 'Courier New', 'Times New Roman'], label: 'Font Family' },
			{ name: 'font-size', value: 16, type: 'number', unit: 'px', min: 0, max: 1200, label: 'Size' },
			{ name: 'font-weight', value: 400, type: 'select', options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], label: 'Weight' },
			{ name: 'color', value: '#333333', type: 'color', label: 'Color' },
			{ name: 'letter-spacing', value: 0, type: 'number', unit: 'px', min: -5, max: 50, label: 'Letter Spacing' },
			{ name: 'line-height', value: 1.5, type: 'number', min: -10, max: null, step: 0.1, label: 'Line Height' },
			{
				name: 'text-shadow', value: '', type: 'custom', label: 'Text Shadow', props: [
					{ name: 'offset-x', label: 'X', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'offset-y', label: 'Y', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'blur', label: 'Blur', value: 0, type: 'number', unit: 'px', min: 0, max: 100, step: 1 },
					{ name: 'color', label: 'Color', value: '#ffffff', type: 'color' }
				]
			},
			{ name: 'textAlign', value: 'center', type: 'select', options: ['left', 'center', 'right', 'justify'], label: 'Align' }
		]
	},
	{
		section: 'dimensions',
		icon: 'border_outer',
		summary: 'Set element dimensions and internal/external spacing.',
		properties: [
			{ name: 'width', value: 0, type: 'number', unit: 'px', min: 0, max: null, label: 'Width' },
			{ name: 'height', value: 0, type: 'number', unit: 'px', min: 50, max: null, label: 'Height' },
			{
				name: 'padding', value: 0, type: 'custom', label: 'Padding', unit: 'px', props: [
					{ name: 'padding', label: 'Padding', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, divider: true },
					{ name: 'padding-top', label: 'Top', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'padding-right', label: 'Right', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'padding-bottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'padding-left', label: 'Left', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 }
				]
			},
			{
				name: 'margin', value: 0, type: 'custom', unit: 'px', label: 'Margin', props: [
					{ name: 'margin', label: 'Margin', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1, divider: true },
					{ name: 'margin-top', label: 'Top', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'margin-right', label: 'Right', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'margin-bottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'margin-left', label: 'Left', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 }
				]
			}
		]
	},
	{
		section: 'transform',
		icon: 'transform',
		summary: 'Apply rotation, scaling, and skew transformations.',
		properties: [
			{ name: 'rotate', value: 0, type: 'number', unit: 'deg', min: 0, max: 360, label: 'Rotate' },
			{ name: 'scale', value: 0, type: 'number', min: 0.1, max: 3, step: 0.1, label: 'Scale' },
			{ name: 'skew-x', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew X' },
			{ name: 'skew-y', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew Y' },
			{ name: 'translate-x', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate X' },
			{ name: 'translate-y', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate Y' }
		]
	},
	{
		section: 'filter',
		icon: 'photo_filter',
		summary: 'Add filter effects such as blur, brightness, or contrast.',
		properties: [
			{ name: 'blur', value: 0, type: 'number', unit: 'px', min: 0, max: 20, label: 'Blur' },
			{ name: 'brightness', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Brightness' },
			{ name: 'contrast', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Contrast' },
			{ name: 'grayscale', value: 0, type: 'number', unit: '%', min: 0, max: 100, label: 'Grayscale' },
			{ name: 'saturate', value: 0, type: 'number', unit: '%', min: 0, max: 200, label: 'Saturate' },
			{ name: 'sepia', value: 0, type: 'number', unit: '%', min: 0, max: 100, label: 'Sepia' }
		]
	},
	{
		section: 'transition',
		icon: 'animation',
		summary: 'Control animation transitions for smooth style changes.',
		properties: [
			{ name: 'transition-property', value: 'all', type: 'text', label: 'Property' },
			{ name: 'transition-duration', value: 0.0, type: 'number', unit: 's', min: 0, max: null, label: 'Duration' },
			{ name: 'transition-timing-function', value: 'ease-in-out', type: 'select', options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'], label: 'Timing Function' },
			{ name: 'transition-delay', value: 0, type: 'number', unit: 's', min: 0, max: null, label: 'Delay' }
		]
	},
	{
		section: 'advanced',
		icon: 'display_settings',
		summary: 'Miscellaneous CSS options for customization.',
		properties: [
			{ name: 'cursor', value: 'pointer', type: 'select', options: ['default', 'pointer', 'text', 'move', 'wait', 'help', 'not-allowed'], label: 'Cursor' },
			{ name: 'overflow', value: 'auto', type: 'select', options: ['visible', 'hidden', 'scroll', 'auto'], label: 'Overflow' },
			{ name: 'zIndex', value: 0, type: 'number', label: 'Z-Index' },
			{ name: 'mix-blend-mode', value: 'normal', type: 'select', options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'], label: 'Mix Blend Mode' }
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
			id: 'img', type: 'Image', category: 'Media', defaultStyles: {
				'width': { value: 150, unit: 'px' },
				'height': { value: 150, unit: 'px' },
				'border-radius': { value: 8, unit: 'px' },
				'object-fit': { value: 'cover', unit: null }
			}
		},
		{
			id: 'video', type: 'Video', category: 'Media', defaultStyles: {
				'width': { value: 300, unit: 'px' },
				'height': { value: 200, unit: 'px' }
			}
		},
		{
			id: 'audio', type: 'Audio', category: 'Media', defaultStyles: {
				'width': { value: 300, unit: 'px' }
			}
		},
	],
	list: [
		{
			id: 'ul', type: 'Unordered List', category: 'List', defaultStyles: {
				'padding-left': { value: 20, unit: 'px' },
				'color': { value: '#333', unit: null }
			}
		},
		{
			id: 'ol', type: 'Ordered List', category: 'List', defaultStyles: {
				'padding-left': { value: 20, unit: 'px' },
				'color': { value: '#333', unit: null }
			}
		},
		{
			id: 'li', type: 'List Item', category: 'List', defaultStyles: {
				'margin-bottom': { value: 5, unit: 'px' }
			}
		},
	],
	table: [
		{
			id: 'table', type: 'Table', category: 'Table', defaultStyles: {
				'border-collapse': { value: 'collapse', unit: null },
				'width': { value: 100, unit: '%' }
			}
		},
		{
			id: 'thead', type: 'Table Head', category: 'Table', defaultStyles: {
				'background-color': { value: '#f4f4f4', unit: null }
			}
		},
		{ id: 'tbody', type: 'Table Body', category: 'Table', defaultStyles: {} },
		{ id: 'tr', type: 'Table Row', category: 'Table', defaultStyles: {} },
		{
			id: 'td', type: 'Table Cell', category: 'Table', defaultStyles: {
				'border': { value: '1px solid #ccc', unit: null },
				'padding': { value: 8, unit: 'px' }
			}
		},
		{
			id: 'th', type: 'Table Header', category: 'Table', defaultStyles: {
				'border': { value: '1px solid #ccc', unit: null },
				'padding': { value: 8, unit: 'px' },
				'background-color': { value: '#f4f4f4', unit: null }
			}
		},
	],
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
		parts: ['offsetX', 'offsetY', 'blurRadius', 'color'],
		formatter: ({ offsetX, offsetY, blurRadius, color }) =>
			`${offsetX}px ${offsetY}px ${blurRadius}px ${color}`,
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
	'background-gradient': {
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
};

