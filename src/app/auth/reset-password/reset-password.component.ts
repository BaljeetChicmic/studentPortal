import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/constant';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPasswordForm:FormGroup|any;
showPassword:boolean = false;
  constructor(private form:FormBuilder) {
   }

  ngOnInit(): void {
    this.initResetPasswordForm();
  }
  initResetPasswordForm()
  {
    this.resetPasswordForm=this.form.group({
      newPassword:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]],
      confirmPassword:['',[Validators.required,Validators.pattern(REGEX.PASSWORD)]]
    })
  }
  showHidePassword()
  {
    console.log(this.showPassword);
    
  }

  get controls() {
    return this.resetPasswordForm.controls;
  }
  resetPassword()
  {
    console.log(this.resetPasswordForm.value);
  }
 
  
}
