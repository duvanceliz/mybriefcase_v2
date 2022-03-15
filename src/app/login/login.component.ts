import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpLoginService } from '../http-login.service';
import { TokenNameService } from '../token-name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginservice:HttpLoginService, private cookie:CookieService, private tokenNameService:TokenNameService) { }

  username:string='';
  password:string='';
  error:string ='';
  loading:Boolean = false;

  ngOnInit(): void {
  }

  login(){

    this.loading = true;
    const user = {username:this.username,password:this.password}
    this.loginservice.login(user).subscribe(data=>{
      this.cookie.set('dz7dp4wdPM',data.body.dataToken);
      this.router.navigateByUrl('/dashboard');
      this.loading = false;
    }, error =>{
      this.error= error.message;
      this.loading = false;
    }
      );
   

  }



}
