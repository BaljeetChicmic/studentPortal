import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS, REGEX, ROLE } from 'src/app/constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  roles = ROLE;
  constructor(private formbuilder:FormBuilder, private router:Router) { }
  submitted:boolean=false;
  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm()
  {
    this.registerForm=this.formbuilder.group(
      {
        name:['',Validators.required],
        email:['', [Validators.email,Validators.required]],
        password:['',Validators.compose([Validators.required,Validators.pattern(REGEX.PASSWORD)])],
        role: ['', Validators.required]
      }
    )
  }
  get controls() {
    return this.registerForm.controls;
  }

  submitRegistrationForm()
  {
      this.submitted=true;
      if(this.registerForm.valid ){
  
        this.router.navigateByUrl(CONSTANTS.AUTH_PATHS.LOGIN);
        console.log("success",this.registerForm.value);
      }
      else
      {
        console.log("invalid data",this.registerForm.value);
      }
  }
}
