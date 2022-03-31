import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
  get(API_PATH: string) {
    return this.http.get(`${this.baseUrl}${API_PATH}`);
  }

  put(API_PATH: string,data:any){
    return this.http.put(`${this.baseUrl}${API_PATH}`,data);
  }

  post(API_PATH: string,data:any){
    return this.http.post(`${this.baseUrl}${API_PATH}`,data);
  }
  forgotPass(API_PATH:string, data:any)
  {
    return this.http.post(`${this.baseUrl}${API_PATH}`,data);
  }
}


