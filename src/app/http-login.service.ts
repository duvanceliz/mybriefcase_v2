import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {

  constructor(private http:HttpClient , private cookie:CookieService) { }

  Url:string = 'http://localhost:8080/login';

  tokenName:string ='';

  generateRandomString(num:number){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
  }

  login(user:any):Observable<any>{
    return this.http.post(this.Url,user,{observe:'response'})
  }

  setToken(token:string){

    this.cookie.set(this.tokenName = this.generateRandomString(10),token);

  }

  getToken(){
    return this.cookie.get(this.tokenName)
  }

  deleteToken():void{
    this.cookie.deleteAll()
  }
}
