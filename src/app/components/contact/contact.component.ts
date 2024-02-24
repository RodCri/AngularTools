import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface ContactForm {
  "name": string,
  "email": string,
  "checkAdult": boolean,
  "department": string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model = {
    name: "",
    email: "",
    checkAdult: true,
    department: ""
  }

  onSubmit(form: NgForm):void{
    if(form.valid)console.log(form.value)
  }
}
