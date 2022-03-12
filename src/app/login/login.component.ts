import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpLoginService } from '../http-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginservice:HttpLoginService) { }

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
      this.loginservice.setToken(data.body.dataToken);
      this.router.navigateByUrl('/dashboard');
      this.loading = false;
    }, error =>{
      this.error= error.message;
      this.loading = false;
    }
      );
   

  }

}
