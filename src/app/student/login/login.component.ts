import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { REGEX } from 'src/app/constant';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  subscription!:Subscription
  constructor(private formbuilder:FormBuilder,private mainService:MainServiceService) { }
   loginForm:FormGroup=this.formbuilder.group({
    email:['',Validators.compose([Validators.required,Validators.email])],
    password:['',Validators.compose([Validators.required,Validators.pattern(REGEX.PASSWORD)])]
   })
  ngOnInit(): void {
  }
  
  userLogin(data:any)
  {
    this.subscription=this.mainService.postLoginUser(data).subscribe((result)=>{
      console.warn(result);
    })
  }
}
