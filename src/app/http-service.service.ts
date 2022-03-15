import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './Models/Contact';
import { Views } from './Models/Views';

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


  deleteComent(contact:Contact, token:string){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+token
    })

    return this.http.delete<Contact>(this.Url+'deleteContact/'+contact.id,{headers})

  }

  viewsSave(views:Views){
    return this.http.post<Views>(this.Url+"viewsSave",views);
  }

  getViews(token:string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + token
    })
    return this.http.get<any>(this.Url+"getViews",{headers});
  }


}
