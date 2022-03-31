import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MainServiceService } from 'src/app/service/main-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
 subscription!:Subscription;
 successMessage!:string;
  constructor(private form:FormBuilder, private mainService:MainServiceService) { }
   forgotForm:FormGroup=this.form.group({
     email:['',Validators.compose([Validators.required,Validators.email])]
   })

  ngOnInit(): void {
  }
  forgotPass(data:any)
  {
    this.subscription=this.mainService.forgotPassword(data).subscribe(()=>{
      this.successMessage = "Reset password OTP send to email sucessfully.";
    })
  }
  ngDestroy()
  {
    this.subscription.unsubscribe();
  }
}
