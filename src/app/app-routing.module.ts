
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONSTANTS } from './constant';

const routes: Routes = [
  {
    path:'', redirectTo:'auth', pathMatch: 'full'
  },
  
   {
    path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
   },
  {
    path:CONSTANTS.AUTH_PATHS.MAIN,loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
