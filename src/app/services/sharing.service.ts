import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person{
  name: string
}

@Injectable({
  providedIn: 'root'
})


export class SharingService {
  private sharingObservablePrivate: BehaviorSubject<Person> = new BehaviorSubject<Person>({name: 'Cristian'});
  constructor() { }

  get sharingObservable(){
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data: Person){
    this.sharingObservablePrivate.next(data);
  }
}
