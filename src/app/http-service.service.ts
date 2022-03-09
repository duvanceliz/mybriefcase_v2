import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  Url:string = 'http://localhost:8080'
  getEmailList(token:string){

    const headers = new HttpHeaders({
      'Athorization':'Bearer ' + token
    })

    return this.http.get<any>(this.Url,{headers})

  }
}
