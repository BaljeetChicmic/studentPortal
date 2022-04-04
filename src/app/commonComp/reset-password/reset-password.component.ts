import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEX } from 'src/app/constant';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPasswordForm:FormGroup|any;
showPassword!:boolean;
  constructor(private form:FormBuilder) {
    this.showPassword=false;
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
  showHidePassword(event:any)
  {
    this.showPassword = event.target.checked;
  }

  get controls() {
    return this.resetPasswordForm.controls;
  }
  resetPassword()
  {
    console.log(this.resetPasswordForm.value);
  }

}
