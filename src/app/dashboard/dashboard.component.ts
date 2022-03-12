import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpLoginService } from '../http-login.service';
import { HttpServiceService } from '../http-service.service';
import { Contact } from '../Models/Contact';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private login:HttpLoginService, private http:HttpServiceService) { }
  
  contacts:Contact[]=[];
  username:string = '';
  jwtToken:any;
  loading:Boolean = false;
  
  ngOnInit(): void {

    this.loading = true;
   
   if(this.login.getToken()){

     this.username = this.getUsername(this.login.getToken());

       this.http.getContactList(this.login.getToken()).subscribe(data =>{
          this.contacts = data;
          this.loading = false;
       })

   }else{
     this.router.navigateByUrl('/login')
   }
  }

  logout(){
    this.login.deleteToken();
    this.router.navigateByUrl("/login")
  }


  getUsername(jwtToken:string):string{
    this.jwtToken = jwt_decode(jwtToken);
    return this.jwtToken.sub;
  }

}
