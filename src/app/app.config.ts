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

interface BaseProperty {
	name: string;
	value: string | number | boolean;
	label?: string;
	unit?: string;
	props?: any
}

interface SimpleProperty extends BaseProperty {
	type: 'color' | 'text' | 'number' | 'toggle' | 'custom';
	min?: number | null;
	max?: number | null;
	step?: number;
}

interface SelectProperty extends BaseProperty {
	type: 'select';
	options: string[];
}

interface BooleanProperty extends BaseProperty {
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
				name: 'backgroundGradient', value: 'linear-gradient(90deg, #3498db, #9b59b6)', type: 'custom', props: [
					{ name: 'type', value: 'linear', type: 'select', options: ['linear', 'radial'], label: 'Gradient Type' },
					{ name: 'angle', value: '90', type: 'number', unit: 'deg', min: 0, max: 360, step: 1, label: 'Gradient Angle' },
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
			{ name: 'borderWidth', value: '2px', type: 'number', unit: 'px', min: 0, max: 20, label: 'Width' },
			{ name: 'borderStyle', value: 'solid', type: 'select', options: ['none', 'solid', 'dashed', 'dotted', 'double'], label: 'Style' },
			{ name: 'borderColor', value: '#2c3e50', type: 'color', label: 'Color' },
			{ name: 'borderTopLeftRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Left' },
			{ name: 'borderTopRightRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Top Right' },
			{ name: 'borderBottomLeftRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Left' },
			{ name: 'borderBottomRightRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100, label: 'Radius Bottom Right' }
		]
	},
	{
		section: 'boxShadow',
		icon: 'tonality',
		summary: 'Control shadow effects for depth and emphasis.',
		properties: [
			{ name: 'boxShadowX', value: '0px', type: 'number', unit: 'px', min: -50, max: 50, label: 'X' },
			{ name: 'boxShadowY', value: '4px', type: 'number', unit: 'px', min: -50, max: 50, label: 'Y' },
			{ name: 'boxShadowBlur', value: '10px', type: 'number', unit: 'px', min: 0, max: 100, label: 'Blur' },
			{ name: 'boxShadowSpread', value: '0px', type: 'number', unit: 'px', min: -50, max: 50, label: 'Spread' },
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
			{ name: 'fontSize', value: '16px', type: 'number', unit: 'px', min: 0, max: 1200, label: 'Size' },
			{ name: 'fontWeight', value: '400', type: 'select', options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], label: 'Weight' },
			{ name: 'color', value: '#333333', type: 'color', label: 'Color' },
			{ name: 'letterSpacing', value: '0px', type: 'number', unit: 'px', min: -5, max: 50, label: 'Letter Spacing' },
			{ name: 'lineHeight', value: '1.5', type: 'number', min: -10, max: null, step: 0.1, label: 'Line Height' },
			{
				name: 'textShadow', value: '0px 1px 3px rgba(0,0,0,0.3)', type: 'custom', props: [
					{ name: 'offsetX', label: 'X', value: '0', type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'offsetY', label: 'Y', value: '1', type: 'number', unit: 'px', min: -50, max: 50, step: 1 },
					{ name: 'blur', label: 'Blur', value: '3', type: 'number', unit: 'px', min: 0, max: 100, step: 1 },
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
			{ name: 'width', value: '300px', type: 'number', unit: 'px', min: 0, max: null, label: 'Width' },
			{ name: 'height', value: '200px', type: 'number', unit: 'px', min: 50, max: null, label: 'Height' },
			{
				name: 'padding', value: '16px', type: 'custom', label: 'Padding', unit: 'px', props: [
					{ name: 'paddingTop', label: 'Top', value: '8', type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingRight', label: 'Right', value: '12', type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingBottom', label: 'Bottom', value: '8', type: 'number', unit: 'px', min: 0, max: 200, step: 1 },
					{ name: 'paddingLeft', label: 'Left', value: '12', type: 'number', unit: 'px', min: 0, max: 200, step: 1 }
				]
			},
			{
				name: 'margin', value: '8px', type: 'custom', unit: 'px', label: 'Margin', props: [
					{ name: 'marginTop', label: 'Top', value: '8', type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginRight', label: 'Right', value: '12', type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginBottom', label: 'Bottom', value: '8', type: 'number', unit: 'px', min: -200, max: 200, step: 1 },
					{ name: 'marginLeft', label: 'Left', value: '12', type: 'number', unit: 'px', min: -200, max: 200, step: 1 }
				]
			}
		]
	},
	{
		section: 'transform',
		icon: 'transform',
		summary: 'Apply rotation, scaling, and skew transformations.',
		properties: [
			{ name: 'rotate', value: '0deg', type: 'number', unit: 'deg', min: 0, max: 360, label: 'Rotate' },
			{ name: 'scale', value: '1', type: 'number', min: 0.1, max: 3, step: 0.1, label: 'Scale' },
			{ name: 'skewX', value: '0deg', type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew X' },
			{ name: 'skewY', value: '0deg', type: 'number', unit: 'deg', min: -45, max: 45, label: 'Skew Y' },
			{ name: 'translateX', value: '0px', type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate X' },
			{ name: 'translateY', value: '0px', type: 'number', unit: 'px', min: -200, max: 200, label: 'Translate Y' }
		]
	},
	{
		section: 'filter',
		icon: 'photo_filter',
		summary: 'Add filter effects such as blur, brightness, or contrast.',
		properties: [
			{ name: 'blur', value: '0px', type: 'number', unit: 'px', min: 0, max: 20, label: 'Blur' },
			{ name: 'brightness', value: '100%', type: 'number', unit: '%', min: 0, max: 200, label: 'Brightness' },
			{ name: 'contrast', value: '100%', type: 'number', unit: '%', min: 0, max: 200, label: 'Contrast' },
			{ name: 'grayscale', value: '0%', type: 'number', unit: '%', min: 0, max: 100, label: 'Grayscale' },
			{ name: 'saturate', value: '100%', type: 'number', unit: '%', min: 0, max: 200, label: 'Saturate' },
			{ name: 'sepia', value: '0%', type: 'number', unit: '%', min: 0, max: 100, label: 'Sepia' }
		]
	},
	{
		section: 'transition',
		icon: 'animation',
		summary: 'Control animation transitions for smooth style changes.',
		properties: [
			{ name: 'transitionProperty', value: 'all', type: 'text', label: 'Property' },
			{ name: 'transitionDuration', value: '0.3', type: 'number', unit: 's', min: 0, max: null, label: 'Duration' },
			{ name: 'transitionTimingFunction', value: 'ease-in-out', type: 'select', options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'], label: 'Timing Function' },
			{ name: 'transitionDelay', value: '0', type: 'number', unit: 's', min: 0, max: null, label: 'Delay' }
		]
	},
	{
		section: 'advanced',
		icon: 'display_settings',
		summary: 'Miscellaneous CSS options for customization.',
		properties: [
			{ name: 'cursor', value: 'pointer', type: 'select', options: ['default', 'pointer', 'text', 'move', 'wait', 'help', 'not-allowed'], label: 'Cursor' },
			{ name: 'overflow', value: 'hidden', type: 'select', options: ['visible', 'hidden', 'scroll', 'auto'], label: 'Overflow' },
			{ name: 'zIndex', value: '1', type: 'number', label: 'Z-Index' },
			{ name: 'mixBlendMode', value: 'normal', type: 'select', options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'], label: 'Mix Blend Mode' }
		]
	}
];

