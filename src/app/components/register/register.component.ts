import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  myField = new FormControl();

  constructor(private readonly fv: FormBuilder){
    
  }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSubmit():void{

  }

  initForm():FormGroup{
    return this.fv.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required]],
      checkAdult: ['',[Validators.required]],
      department: [''],
    })
  }
}
