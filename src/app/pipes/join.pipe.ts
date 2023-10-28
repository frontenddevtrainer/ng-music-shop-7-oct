import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string {
    const separator = args[0] || ", "
    if(!value) {
      return "";
    }
    return value.join(separator);
  }

}
