import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './Models/Contact';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  Url:string = 'http://localhost:8080/api/'
  getContactList(token:string){

    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + token
    })

    return this.http.get<any>(this.Url+"contactList",{headers});

  }

  setComent(coment:Contact){

    return this.http.post<Contact>(this.Url+"contactSave",coment);

  }


}
