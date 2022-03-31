import { Injectable } from '@angular/core';
import { API_PATHS } from '../constant';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpServiceService) { }
  getUser(){
    return this.http.get(API_PATHS.GET_USER);
  }
  postRegisterUser(data:any)
  {
    return this.http.post(API_PATHS.POST_USER.SIGNUP,data);
  }
  postLoginUser(data:any)
  {
    return this.http.post(API_PATHS.POST_USER.LOGIN,data);
  }
  forgotPassword(data:any){
    return this.http.post(API_PATHS.POST_USER.LOGIN,data);
  }
}
    