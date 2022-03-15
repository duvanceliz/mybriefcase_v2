import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLoginService {

  constructor(private http:HttpClient) { }

  Url:string = 'http://localhost:8080/login';

  login(user:any):Observable<any>{
    return this.http.post(this.Url,user,{observe:'response'})
  }

}
