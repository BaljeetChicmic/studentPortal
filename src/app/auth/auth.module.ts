import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {  ResolveStart, RouterModule,Routes } from '@angular/router';
import { CONSTANTS } from '../constant';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
;

const routes:Routes=[
  {
    path:'', redirectTo:CONSTANTS.AUTH_PATHS.LOGIN, pathMatch: 'full'
  },
  {
    path:CONSTANTS.AUTH_PATHS.SIGNUP, component:RegisterComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.LOGIN, component:LoginComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.FORGOT_PASS, component:ForgotPasswordComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.RESET_PASS, component:ResetPasswordComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
