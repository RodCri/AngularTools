import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  myField = new FormControl();
  name!: string;

  constructor(
    private readonly fv: FormBuilder,
    private readonly route: ActivatedRoute
  ){  }

  ngOnInit(): void {
    this.registerForm = this.initForm();
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
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
