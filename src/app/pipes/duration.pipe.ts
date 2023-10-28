import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    if(!value) {
      return "0:00"
    }
     
    const minutes : number = Math.floor(value / 60); // 5
    const seconds: number = (value - minutes * 60); // 20

    return `${minutes}:${ ('0' + seconds).slice(-2) }`;
  }

}
