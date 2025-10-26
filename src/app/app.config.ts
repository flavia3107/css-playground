export const STATES = {
	phase_1: [
		'Preview Box — main element whose styles are edited',
		'Real-time updates (Angular bindings update the preview instantly)',
		'Background Color Picker',
		'Border Controls: width, color, style, radius',
		'Box Shadow Controls: X/Y offset, blur, spread, color',
		'Font: color, size',
		'Export CSS Button (copy to clipboard)',
		'CSS code box showing generated CSS',
		'Select item (input, button, div....)'
	],
	phase_2: [
		'Add persistence, interactivity, and extra styling categories.',
		'Save preset to localStorage',
		'Load / delete saved presets',
		'Rename presets',
		'Random Style button — generates random color, border, shadow, etc.',
		'Option to lock certain properties before randomizing',
		'Gradient backgrounds (linear/radial)',
		'Text shadow',
		'Padding / margin sliders',
		'Width & height controls',
		'Preview Enhancements',
		'Different element types (box, button, card, text)',
		'Hover / active state toggle',
		'Reset button',
		'Code Display',
		'Syntax-highlighted CSS viewer',
		'Copy to Clipboard animation or toast'
	],
	phase_3: [
		'Color harmony picker (complementary, analogous, triadic)',
		'SCSS/LESS output toggle',
		'Undo / Redo history',
		'Import / export as JSON',
		'Download CSS / HTML as a zip',
		'Preview & Layout',
		'Responsive preview (mobile/tablet/desktop toggle)',
		'Resizable / draggable preview box',
		'Option to switch to a full “card” preview with text and buttons',
		'Sharing & Export',
		'Shareable URL (encode styles into query string)',
		'“Copy HTML + CSS” snippet',
		'Screenshot download (canvas or html2canvas)',
		'UI / UX Polish',
		'Dark / light theme switch',
		'Smooth transitions on style changes',
		'Micro animations (hover effects, color transitions)',
		'Tooltips with property explanations'
	]
}

export interface BaseProperty {
	name: string;
	value: string | number | boolean;
	label?: string;
	unit?: string;
	props?: any
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
			{ name: 'backgroundColor', value: '#3498db', type: 'color', 'label': 'Color' },
			{
				name: 'backgroundGradient', value: 'linear-gradient(90deg, #3498db, #9b59b6)', type: 'custom', label: 'Gradient', props: [
					{ name: 'type', value: 'linear', type: 'select', options: ['linear', 'radial'], label: 'Type' },
					{ name: 'angle', value: 0, type: 'number', unit: 'deg', min: 0, max: 360, step: 1, label: 'Angle' },
					{ name: 'color_1', type: 'color', value: '#3498db', label: 'First Color' },
					{ name: 'color_1', type: 'color', value: '#3498db', label: 'Second Color' }
				]
			},
			{ name: 'backgroundImage', value: '', type: 'text', label: 'Image' },
			{ name: 'backgroundSize', value: 'cover', type: 'select', options: ['auto', 'cover', 'contain'], label: 'Size' },
			{ name: 'backgroundRepeat', value: 'no-repeat', type: 'select', options: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'], label: 'Repeat' },
			{ name: 'opacity', value: 1, type: 'number', unit: '', min: 0, max: 1, step: 0.1, label: 'Opacity' }
		]
	},
	{
		section: 'border',
		icon: 'rounded_corner',
		summary: 'Adjust border size, color, and style for the element.',
		properties: [
			{ name: 'borderWidth', value: 1, type: 'number', unit: 'px', min: 0, max: 20, label: 'Width' },
			{ name: 'borderStyle', value: 'solid', type: 'select', options: ['none', 'solid', 'dashed', 'dotted', 'double'], label: 'Style' },
			{ name: 'borderColor', value: '#2c3e50', type: 'color', label: 'Color' },
			{ name: 'borderTopLeftRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Left' },
			{ name: 'borderTopRightRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Right' },
			{ name: 'borderBottomLeftRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Left' },
			{ name: 'borderBottomRightRadius', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Right' }
		]
	},
	{
		section: 'boxShadow',
		icon: 'tonality',
		summary: 'Control shadow effects for depth and emphasis.',
		properties: [
			{ name: 'boxShadowX', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'X' },
			{ name: 'boxShadowY', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Y' },
			{ name: 'boxShadowBlur', value: 0, type: 'number', unit: 'px', min: 0, max: 100, label: 'Blur' },
			{ name: 'boxShadowSpread', value: 0, type: 'number', unit: 'px', min: -50, max: 50, label: 'Spread' },
			{ name: 'boxShadowColor', value: 'rgba(0, 0, 0, 0.3)', type: 'color', label: 'Color' },
			{ name: 'boxShadowInset', value: false, type: 'toggle', label: 'Inset' }
		]
	},
	{
		section: 'text',
		icon: 'text_fields',
		summary: 'Modify font style, size, weight, and color for text elements.',
		properties: [
			{ name: 'fontFamily', value: 'Arial, sans-serif', type: 'select', options: ['Arial', 'Roboto', 'Georgia', 'Courier New', 'Times New Roman'], label: 'Font Family' },
			{ name: 'fontSize', value: 16, type: 'number', unit: 'px', min: 0, max: 1200, label: 'Size' },
			{ name: 'fontWeight', value: 400, type: 'select', options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], label: 'Weight' },
			{ name: 'color', value: '#333333', type: 'color', label: 'Color' },
			{ name: 'letterSpacing', value: 0, type: 'number', unit: 'px', min: -5, max: 50, label: 'Letter Spacing' },
			{ name: 'lineHeight', value: 1.5, type: 'number', min: -10, max: null, step: 0.1, label: 'Line Height' },
			{
				name: 'textShadow', value: '0px 1px 3px rgba(0,0,0,0.3)', type: 'custom', label: 'Text Shadow', props: [
					{ name: 'offsetX', label: 'X', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'offsetY', label: 'Y', value: 0, type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'blur', label: 'Blur', value: 0, type: 'number', unit: 'px', min: 0, max: 100, step: 1 },
					{ name: 'color', label: 'Color', value: 'rgba(0,0,0,0.3)', type: 'color' }
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
					{ name: 'paddingTop', label: 'Top', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingRight', label: 'Right', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingBottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingLeft', label: 'Left', value: 0, type: 'number', unit: 'px', min: 0, max: 200, step: 1 }
				]
			},
			{
				name: 'margin', value: 0, type: 'custom', unit: 'px', label: 'Margin', props: [
					{ name: 'marginTop', label: 'Top', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginRight', label: 'Right', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginBottom', label: 'Bottom', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginLeft', label: 'Left', value: 0, type: 'number', unit: 'px', min: -200, max: 200, step: 1 }
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
			{ name: 'skewX', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew X' },
			{ name: 'skewY', value: 0, type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew Y' },
			{ name: 'translateX', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate X' },
			{ name: 'translateY', value: 0, type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate Y' }
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
			{ name: 'transitionProperty', value: 'all', type: 'text', label: 'Property' },
			{ name: 'transitionDuration', value: 0.0, type: 'number', unit: 's', min: 0, max: null, label: 'Duration' },
			{ name: 'transitionTimingFunction', value: 'ease-in-out', type: 'select', options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'], label: 'Timing Function' },
			{ name: 'transitionDelay', value: 0, type: 'number', unit: 's', min: 0, max: null, label: 'Delay' }
		]
	},
	{
		section: 'advanced',
		icon: 'display_settings',
		summary: 'Miscellaneous CSS options for customization.',
		properties: [
			{ name: 'cursor', value: 'pointer', type: 'select', options: ['default', 'pointer', 'text', 'move', 'wait', 'help', 'not-allowed'], label: 'Cursor' },
			{ name: 'overflow', value: 'hidden', type: 'select', options: ['visible', 'hidden', 'scroll', 'auto'], label: 'Overflow' },
			{ name: 'zIndex', value: 1, type: 'number', label: 'Z-Index' },
			{ name: 'mixBlendMode', value: 'normal', type: 'select', options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'], label: 'Mix Blend Mode' }
		]
	}
];

export const ELEMENTS = {
	text: [
		{ id: 'p', type: 'Paragraph', category: 'Text', defaultStyles: { 'color': '#555', 'font-size': '14px', 'line-height': '1.5' } },
		{ id: 'h1', type: 'Header 1', category: 'Text', defaultStyles: { 'color': '#222', 'font-size': '32px', 'font-weight': 'bold' } },
		{ id: 'h2', type: 'Header 2', category: 'Text', defaultStyles: { 'color': '#222', 'font-size': '28px', 'font-weight': 'bold' } },
		{ id: 'h3', type: 'Header 3', category: 'Text', defaultStyles: { 'color': '#222', 'font-size': '24px', 'font-weight': 'bold' } },
		{ id: 'span', type: 'Span', category: 'Text', defaultStyles: { 'color': '#000', 'font-size': '14px' } },
		{ id: 'blockquote', type: 'Blockquote', category: 'Text', defaultStyles: { 'color': '#666', 'font-size': '16px', 'padding-left': '20px', 'border-left': '4px solid #ccc' } },

	],
	form: [
		{ id: 'button', type: 'Button', category: 'Form', defaultStyles: { 'background-color': '#007bff', 'color': '#fff', 'border-radius': '4px', 'padding': '10px 20px', 'font-size': '16px', 'border': 'none', 'cursor': 'pointer' } },
		{ id: 'input', type: 'Input', category: 'Form', defaultStyles: { 'width': '200px', 'padding': '8px 12px', 'border': '1px solid #ccc', 'border-radius': '4px', 'font-size': '16px' } },
		{ id: 'textarea', type: 'Textarea', category: 'Form', defaultStyles: { 'width': '300px', 'height': '100px', 'padding': '10px', 'border': '1px solid #ccc', 'border-radius': '4px', 'font-size': '16px', 'resize': 'vertical' } },
		{ id: 'select', type: 'Select', category: 'Form', defaultStyles: { 'width': '220px', 'padding': '8px', 'border': '1px solid #ccc', 'border-radius': '4px', 'font-size': '16px' } },
		{ id: 'label', type: 'Label', category: 'Form', defaultStyles: { 'font-size': '14px', 'color': '#333' } },
	],
	layout: [
		{ id: 'div', type: 'Div', category: 'Layout', defaultStyles: { 'width': '150px', 'height': '150px', 'background-color': '#e0e0e0', 'border': '1px solid #ccc', 'border-radius': '4px' } },
		{ id: 'section', type: 'Section', category: 'Layout', defaultStyles: { 'padding': '20px', 'background-color': '#f4f4f4' } },
		{ id: 'article', type: 'Article', category: 'Layout', defaultStyles: { 'padding': '20px', 'background-color': '#fff', 'border': '1px solid #ccc', 'border-radius': '4px' } },
		{ id: 'header', type: 'Header', category: 'Layout', defaultStyles: { 'padding': '20px', 'background-color': '#222', 'color': '#fff' } },
		{ id: 'footer', type: 'Footer', category: 'Layout', defaultStyles: { 'padding': '20px', 'background-color': '#333', 'color': '#fff' } },
		{ id: 'nav', type: 'Nav', category: 'Layout', defaultStyles: { 'padding': '10px', 'background-color': '#007bff', 'color': '#fff' } },
	],
	media: [
		{ id: 'img', type: 'Image', category: 'Media', defaultStyles: { 'width': '150px', 'height': '150px', 'border-radius': '8px', 'object-fit': 'cover' } },
		{ id: 'video', type: 'Video', category: 'Media', defaultStyles: { 'width': '300px', 'height': '200px' } },
		{ id: 'audio', type: 'Audio', category: 'Media', defaultStyles: { 'width': '300px' } },

	],
	list: [
		{ id: 'ul', type: 'Unordered List', category: 'List', defaultStyles: { 'padding-left': '20px', 'color': '#333' } },
		{ id: 'ol', type: 'Ordered List', category: 'List', defaultStyles: { 'padding-left': '20px', 'color': '#333' } },
		{ id: 'li', type: 'List Item', category: 'List', defaultStyles: { 'margin-bottom': '5px' } },

	],
	table: [
		{ id: 'table', type: 'Table', category: 'Table', defaultStyles: { 'border-collapse': 'collapse', 'width': '100%' } },
		{ id: 'thead', type: 'Table Head', category: 'Table', defaultStyles: { 'background-color': '#f4f4f4' } },
		{ id: 'tbody', type: 'Table Body', category: 'Table', defaultStyles: {} },
		{ id: 'tr', type: 'Table Row', category: 'Table', defaultStyles: {} },
		{ id: 'td', type: 'Table Cell', category: 'Table', defaultStyles: { 'border': '1px solid #ccc', 'padding': '8px' } },
		{ id: 'th', type: 'Table Header', category: 'Table', defaultStyles: { 'border': '1px solid #ccc', 'padding': '8px', 'background-color': '#f4f4f4' } },
	],
	inline: [
		{ id: 'a', type: 'Anchor', category: 'Inline', defaultStyles: { 'color': '#007bff', 'text-decoration': 'underline' } },
		{ id: 'strong', type: 'Strong', category: 'Inline', defaultStyles: { 'font-weight': 'bold' } },
		{ id: 'em', type: 'Emphasis', category: 'Inline', defaultStyles: { 'font-style': 'italic' } },
		{ id: 'code', type: 'Code', category: 'Inline', defaultStyles: { 'font-family': 'monospace', 'background-color': '#f4f4f4', 'padding': '2px 4px', 'border-radius': '4px' } },

	],
	interactive: [
		{ id: 'details', type: 'Details', category: 'Interactive', defaultStyles: { 'padding': '10px', 'border': '1px solid #ccc', 'border-radius': '4px' } },
		{ id: 'summary', type: 'Summary', category: 'Interactive', defaultStyles: { 'font-weight': 'bold', 'cursor': 'pointer' } }
	]
};
