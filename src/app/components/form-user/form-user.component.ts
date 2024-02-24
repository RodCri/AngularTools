import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {
  @Input() label!: string;
  @Input() className: string = 'btn-primary';
  @Output() newUserEvent = new EventEmitter<string>();

  onAddNewUser(user: string):void{
    this.newUserEvent.emit(user);
  }
}
