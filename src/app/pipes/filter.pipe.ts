import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], arg: string): User[] {
    if(!arg || arg?.length < 1) return users;
    let results : User[] = [];
    for(const value of users){
      if(value.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        results = [...results,value];
      }
    }
    return results;
  }

}
