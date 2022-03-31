import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONSTANTS } from './constant';
import { ForgotPasswordComponent } from './student/forgot-password/forgot-password.component';
import { LoginComponent } from './student/login/login.component';
import { RegisterComponent } from './student/register/register.component';
import { ResetPasswordComponent } from './student/reset-password/reset-password.component';

const routes: Routes = [
  {
    path:CONSTANTS.AUTH_PATHS.LOGIN, component:LoginComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.SIGNUP, component:RegisterComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.FORGOT_PASS, component:ForgotPasswordComponent
  },
  {
    path:CONSTANTS.AUTH_PATHS.RESET_PASS, component:ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
