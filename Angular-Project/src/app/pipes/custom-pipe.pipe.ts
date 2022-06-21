import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  transform(value: number, multiplier: number): string {
    return "Final Val = " + (value * multiplier);
  }
}
