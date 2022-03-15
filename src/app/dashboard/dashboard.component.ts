import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpLoginService } from '../http-login.service';
import { HttpServiceService } from '../http-service.service';
import { Contact } from '../Models/Contact';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { Views } from '../Models/Views';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private login:HttpLoginService, private http:HttpServiceService,private cookie:CookieService) { }
  
  contacts:Contact[]=[];
  viewsList:Views[]=[];
  username:string = '';
  jwtToken:any;
  loading:Boolean = false;
  loadingDel:Boolean = false;
  views:number= 0;
  token:string = this.cookie.get('dz7dp4wdPM');
  
  ngOnInit(): void {

    this.loading = true;
   
   if(this.token){

     this.username = this.getUsername(this.token);

       this.http.getContactList(this.token).subscribe(data =>{
          this.contacts = data;
          this.loading = false;
       })


       this.http.getViews(this.token).subscribe(data=>{
        this.viewsList = data;
        this.views = this.viewsList.length
       })


   }else{
     this.router.navigateByUrl('/login')
   }
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl("/login")
  }


  getUsername(jwtToken:string):string{
    this.jwtToken = jwt_decode(jwtToken);
    return this.jwtToken.sub;
  }


  _delete(contact:Contact){

    this.loadingDel = true;

    this.http.deleteComent(contact,this.token).subscribe(data=>{

      this.contacts = this.contacts.filter(c=>c!==contact)

      this.loadingDel=false;
      
    },error=>{
      console.log(error.message)
    })

  }

}
