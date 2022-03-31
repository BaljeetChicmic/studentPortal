import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { REGEX } from 'src/app/constant';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   subscription!:Subscription;
  constructor(private formbuilder:FormBuilder,private mainService:MainServiceService) { }
  registerForm:FormGroup=this.formbuilder.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.required,Validators.email])],
    password:['',Validators.compose([Validators.required,Validators.pattern(REGEX.PASSWORD)])]
  }

  );
  ngOnInit(): void {
  }
  registerUser(data:any)
  {
    this.subscription=this.mainService.postRegisterUser(data).subscribe((result)=>{
      console.warn(result);
    })
  }
}
