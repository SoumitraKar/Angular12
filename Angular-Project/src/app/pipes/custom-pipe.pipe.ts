import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: number, multiplier: number): string {
    let final = value * multiplier;
    return "Final Val = " + final;
  }

}
