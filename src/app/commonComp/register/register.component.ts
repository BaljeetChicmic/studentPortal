import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  constructor(private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm()
  {
    this.registerForm=this.formbuilder.group(
      {
        name:['',Validators.required],
        email:['', [Validators.email,Validators.required]],
        password:['',Validators.compose([Validators.required,Validators.pattern(REGEX.PASSWORD)])]
      }
    )
  }
  get controls() {
    return this.registerForm.controls;
  }

  submitRegistrationForm()
  {

  }
}
