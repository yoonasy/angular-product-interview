import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFixed'
})
export class ToFixedPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    return value.toFixed(args[0] || 2);
  }
}
