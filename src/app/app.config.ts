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
}

interface SimpleProperty extends BaseProperty {
	type: 'color' | 'text' | 'number' | 'range' | 'toggle';
	min?: number;
	max?: number;
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
			{ name: 'backgroundColor', value: '#3498db', type: 'color' },
			{ name: 'backgroundGradient', value: 'linear-gradient(90deg, #3498db, #9b59b6)', type: 'text' },
			{ name: 'backgroundImage', value: '', type: 'text' },
			{ name: 'backgroundSize', value: 'cover', type: 'select', options: ['auto', 'cover', 'contain'] },
			{ name: 'backgroundRepeat', value: 'no-repeat', type: 'select', options: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'] },
			{ name: 'opacity', value: 1, type: 'number', unit: '', min: 0, max: 1, step: 0.1 }
		]
	},
	{
		section: 'border',
		icon: 'rounded_corner',
		summary: 'Adjust border size, color, and style for the element.',
		properties: [
			{ name: 'borderWidth', value: '2px', type: 'number', unit: 'px', min: 0, max: 20 },
			{ name: 'borderStyle', value: 'solid', type: 'select', options: ['none', 'solid', 'dashed', 'dotted', 'double'] },
			{ name: 'borderColor', value: '#2c3e50', type: 'color' },
			{ name: 'borderTopLeftRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100 },
			{ name: 'borderTopRightRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100 },
			{ name: 'borderBottomLeftRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100 },
			{ name: 'borderBottomRightRadius', value: '8px', type: 'number', unit: 'px', min: 0, max: 100 }
		]
	},
	{
		section: 'boxShadow',
		icon: 'tonality',
		summary: 'Control shadow effects for depth and emphasis.',
		properties: [
			{ name: 'boxShadowX', value: '0px', type: 'number', unit: 'px', min: -50, max: 50 },
			{ name: 'boxShadowY', value: '4px', type: 'number', unit: 'px', min: -50, max: 50 },
			{ name: 'boxShadowBlur', value: '10px', type: 'number', unit: 'px', min: 0, max: 100 },
			{ name: 'boxShadowSpread', value: '0px', type: 'number', unit: 'px', min: -50, max: 50 },
			{ name: 'boxShadowColor', value: 'rgba(0, 0, 0, 0.3)', type: 'color' },
			{ name: 'boxShadowInset', value: false, type: 'toggle' }
		]
	},
	{
		section: 'text',
		icon: 'text_fields',
		summary: 'Modify font style, size, weight, and color for text elements.',
		properties: [
			{ name: 'fontFamily', value: 'Arial, sans-serif', type: 'select', options: ['Arial', 'Roboto', 'Georgia', 'Courier New', 'Times New Roman'] },
			{ name: 'fontSize', value: '16px', type: 'number', unit: 'px', min: 8, max: 72 },
			{ name: 'fontWeight', value: '400', type: 'select', options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] },
			{ name: 'color', value: '#333333', type: 'color' },
			{ name: 'letterSpacing', value: '0px', type: 'number', unit: 'px', min: -5, max: 10 },
			{ name: 'lineHeight', value: '1.5', type: 'number', min: 1, max: 3, step: 0.1 },
			{ name: 'textShadow', value: '0px 1px 3px rgba(0,0,0,0.3)', type: 'text' },
			{ name: 'textAlign', value: 'center', type: 'select', options: ['left', 'center', 'right', 'justify'] }
		]
	},
	{
		section: 'dimensions',
		icon: 'border_outer',
		summary: 'Set element dimensions and internal/external spacing.',
		properties: [
			{ name: 'width', value: '300px', type: 'number', unit: 'px', min: 50, max: 800 },
			{ name: 'height', value: '200px', type: 'number', unit: 'px', min: 50, max: 600 },
			{ name: 'padding', value: '16px', type: 'text', unit: 'px' },
			{ name: 'margin', value: '8px', type: 'text', unit: 'px' }
		]
	},
	{
		section: 'transform',
		icon: 'transform',
		summary: 'Apply rotation, scaling, and skew transformations.',
		properties: [
			{ name: 'rotate', value: '0deg', type: 'number', unit: 'deg', min: 0, max: 360 },
			{ name: 'scale', value: '1', type: 'number', min: 0.1, max: 3, step: 0.1 },
			{ name: 'skewX', value: '0deg', type: 'number', unit: 'deg', min: -45, max: 45 },
			{ name: 'skewY', value: '0deg', type: 'number', unit: 'deg', min: -45, max: 45 },
			{ name: 'translateX', value: '0px', type: 'number', unit: 'px', min: -200, max: 200 },
			{ name: 'translateY', value: '0px', type: 'number', unit: 'px', min: -200, max: 200 }
		]
	},
	{
		section: 'filter',
		icon: 'photo_filter',
		summary: 'Add filter effects such as blur, brightness, or contrast.',
		properties: [
			{ name: 'blur', value: '0px', type: 'number', unit: 'px', min: 0, max: 20 },
			{ name: 'brightness', value: '100%', type: 'number', unit: '%', min: 0, max: 200 },
			{ name: 'contrast', value: '100%', type: 'number', unit: '%', min: 0, max: 200 },
			{ name: 'grayscale', value: '0%', type: 'number', unit: '%', min: 0, max: 100 },
			{ name: 'saturate', value: '100%', type: 'number', unit: '%', min: 0, max: 200 },
			{ name: 'sepia', value: '0%', type: 'number', unit: '%', min: 0, max: 100 }
		]
	},
	{
		section: 'transition',
		icon: 'animation',
		summary: 'Control animation transitions for smooth style changes.',
		properties: [
			{ name: 'transitionProperty', value: 'all', type: 'text' },
			{ name: 'transitionDuration', value: '0.3s', type: 'text' },
			{ name: 'transitionTimingFunction', value: 'ease-in-out', type: 'select', options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'] },
			{ name: 'transitionDelay', value: '0s', type: 'text' }
		]
	},
	{
		section: 'advanced',
		icon: 'display_settings',
		summary: 'Miscellaneous CSS options for customization.',
		properties: [
			{ name: 'cursor', value: 'pointer', type: 'select', options: ['default', 'pointer', 'text', 'move', 'wait', 'help', 'not-allowed'] },
			{ name: 'overflow', value: 'hidden', type: 'select', options: ['visible', 'hidden', 'scroll', 'auto'] },
			{ name: 'zIndex', value: '1', type: 'number' },
			{ name: 'mixBlendMode', value: 'normal', type: 'select', options: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten'] }
		]
	}
];

