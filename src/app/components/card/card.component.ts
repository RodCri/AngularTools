import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Person, SharingService } from 'src/app/services/sharing.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  name: string = 'Camilo Rodriguez';
  state : boolean = true;
  routeImage: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ldR8OnrkPASez-MsIXJoB0AStZPlp1NvJg&usqp=CAU';
  email!: string;
  selectedUser!: string;
  criterio!: string;

  public users: User[];

  data$: Observable<Person>;

  constructor(private sharingService: SharingService){
  this.data$ = sharingService.sharingObservable;
    this.users = [
      {
        id: 1,
        name: 'cris',
        state: true
      },
      {
        id: 2,
        name: 'dann',
        state: false
      },
      {
        id: 3,
        name: 'fel',
        state: false
      },
      {
        id: 4,
        name: 'osc',
        state: true
      },
      {
        id: 5,
        name: 'cdf',
        state: true
      },
    ]
  }

  onSelect(user: User){
    this.selectedUser = user.name
  }

  clearSelection(){
    this.selectedUser = '';
  }

  addUser(user: User):void{
    this.users.push(user);
  }
  addNewUser(userName: string):void{
    this.users.push({
      id: this.users.length,
      name: userName,
      state: false
    })
    console.log(this.users)
  }
}
