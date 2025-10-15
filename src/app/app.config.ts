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

export const CSS_CONFIG = [
	{
		section: 'background',
		summary: 'Customize background colors, gradients, and opacity.',
		properties: [
			{ name: 'backgroundColor', value: '#3498db' },
			{ name: 'backgroundGradient', value: 'linear-gradient(90deg, #3498db, #9b59b6)' },
			{ name: 'backgroundImage', value: '' },
			{ name: 'backgroundSize', value: 'cover' },
			{ name: 'backgroundRepeat', value: 'no-repeat' },
			{ name: 'opacity', value: 1 }
		]
	},
	{
		section: 'border',
		summary: 'Adjust border size, color, and style for the element.',
		properties: [
			{ name: 'borderWidth', value: '2px' },
			{ name: 'borderStyle', value: 'solid' },
			{ name: 'borderColor', value: '#2c3e50' },
			{ name: 'borderTopLeftRadius', value: '8px' },
			{ name: 'borderTopRightRadius', value: '8px' },
			{ name: 'borderBottomLeftRadius', value: '8px' },
			{ name: 'borderBottomRightRadius', value: '8px' }
		]
	},
	{
		section: 'boxShadow',
		summary: 'Control shadow effects for depth and emphasis.',
		properties: [
			{ name: 'boxShadowX', value: '0px' },
			{ name: 'boxShadowY', value: '4px' },
			{ name: 'boxShadowBlur', value: '10px' },
			{ name: 'boxShadowSpread', value: '0px' },
			{ name: 'boxShadowColor', value: 'rgba(0, 0, 0, 0.3)' },
			{ name: 'boxShadowInset', value: false }
		]
	},
	{
		section: 'text',
		summary: 'Modify font style, size, weight, and color for text elements.',
		properties: [
			{ name: 'fontFamily', value: 'Arial, sans-serif' },
			{ name: 'fontSize', value: '16px' },
			{ name: 'fontWeight', value: '400' },
			{ name: 'color', value: '#333333' },
			{ name: 'letterSpacing', value: '0px' },
			{ name: 'lineHeight', value: '1.5' },
			{ name: 'textShadow', value: '0px 1px 3px rgba(0,0,0,0.3)' },
			{ name: 'textAlign', value: 'center' }
		]
	},
	{
		section: 'dimensions',
		summary: 'Set element dimensions and internal/external spacing.',
		properties: [
			{ name: 'width', value: '300px' },
			{ name: 'height', value: '200px' },
			{ name: 'padding', value: '16px' },
			{ name: 'margin', value: '8px' }
		]
	},
	{
		section: 'transform',
		summary: 'Apply rotation, scaling, and skew transformations.',
		properties: [
			{ name: 'rotate', value: '0deg' },
			{ name: 'scale', value: '1' },
			{ name: 'skewX', value: '0deg' },
			{ name: 'skewY', value: '0deg' },
			{ name: 'translateX', value: '0px' },
			{ name: 'translateY', value: '0px' }
		]
	},
	{
		section: 'filter',
		summary: 'Add filter effects such as blur, brightness, or contrast.',
		properties: [
			{ name: 'blur', value: '0px' },
			{ name: 'brightness', value: '100%' },
			{ name: 'contrast', value: '100%' },
			{ name: 'grayscale', value: '0%' },
			{ name: 'saturate', value: '100%' },
			{ name: 'sepia', value: '0%' }
		]
	},
	{
		section: 'transition',
		summary: 'Control animation transitions for smooth style changes.',
		properties: [
			{ name: 'transitionProperty', value: 'all' },
			{ name: 'transitionDuration', value: '0.3s' },
			{ name: 'transitionTimingFunction', value: 'ease-in-out' },
			{ name: 'transitionDelay', value: '0s' }
		]
	},
	{
		section: 'advanced',
		summary: 'Miscellaneous CSS options for customization.',
		properties: [
			{ name: 'cursor', value: 'pointer' },
			{ name: 'overflow', value: 'hidden' },
			{ name: 'zIndex', value: '1' },
			{ name: 'mixBlendMode', value: 'normal' }
		]
	}
];
