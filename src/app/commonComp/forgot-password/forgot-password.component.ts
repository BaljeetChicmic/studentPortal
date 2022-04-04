import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup | any
  otpSent:boolean = false;
  submitted:boolean = false
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForgotPasswordForm();
  }

  initForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      userMail: ['', Validators.compose([Validators.required,Validators.email])],
      otp: ['']
    })
  }

  get controls() {
    return this.forgotPasswordForm.controls;
  }

  submit() {
    this.submitted = true
    if(this.forgotPasswordForm.valid) {
      if(this.otpSent) {
        console.log('valid===>', this.forgotPasswordForm.value);
        // call verify otp api
        
      } else {
        console.log('valid===>', this.forgotPasswordForm.value);
        let data = {
          email: this.forgotPasswordForm.value.userMail
        }
        this.submitted = false; // do it in success response of api
        // call forgot password api
        this.forgotPasswordForm.controls['otp'].setValidators(Validators.required) 
        this.otpSent = true;
      }
    } else {
      console.log( 'Invalid====>', this.forgotPasswordForm.value);
    } 
  }

}
