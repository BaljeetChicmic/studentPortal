import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup|any;
  constructor(private form:FormBuilder) { }
  
  
  ngOnInit(): void 
  {
    this.initLoginForm();
  }
  
   
  initLoginForm(){

    this.loginForm=this.form.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]]
    })

  }
   
  
  get controls() {
    return this.loginForm.controls;
  }

  loginUser()
  {

  }

}
