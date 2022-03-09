import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {

  constructor(private http:HttpClient , private cookie:CookieService) { }

  Url:string = 'http://localhost:8080';

  login(user:any){
    return this.http.post(this.Url,user,{observe:'response'})

  }

  setToken(token:string){

    this.cookie.set("JWTtoken",token);

  }

  getToken(){
    this.cookie.get('JWTtoken')
  }

  deleteToken(){
    this.cookie.delete('JWTtoken')
  }
}
