import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS,REGEX } from 'src/app/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup|any;
  submitted:boolean=false;
  constructor(private form:FormBuilder,private router:Router) { }
  
  
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
     this.submitted=true;
     if(this.loginForm.valid)
     {
        this.router.navigateByUrl(CONSTANTS.AUTH_PATHS.MAIN);
        console.log("Success",this.loginForm.value);
     }
     {
       console.log("invalid user");
     }
  }

}
