import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
export class ContactComponent implements OnInit{

  id!: string;

  model = {
    name: "",
    email: "",
    checkAdult: true,
    department: ""
  }

  constructor(
    private readonly route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      this.id = params['id'];
    })
  }

  onSubmit(form: NgForm):void{
    if(form.valid)console.log(form.value)
  }
}
