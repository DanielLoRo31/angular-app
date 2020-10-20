import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, upperOrLower: string): unknown {
    if (upperOrLower === 'upper') {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }

    
  }

}
