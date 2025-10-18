import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'camelToWords'
})
export class CamelToWordsPipe implements PipeTransform {

	transform(value: string): string {
		if (!value) return '';

		const spaced = value.replace(/([a-z])([A-Z])/g, '$1 $2');
		return spaced
			.split(' ')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

}