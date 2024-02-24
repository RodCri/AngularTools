import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(values: string[], arg: string): string[] {
    let result: string[] = [];
    for(const value of values) {
      if(value.indexOf(arg) > -1){
        result = [...result,value]
      }
    }
    return result;
  }

}
