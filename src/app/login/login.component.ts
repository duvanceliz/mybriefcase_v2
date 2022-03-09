import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  username:string='';
  password:string='';
  error:string ='';
  loading:Boolean = false;

  ngOnInit(): void {
  }

  login(){

    this.loading = true;
    const user = {username:this.username,password:this.password}
    this.router.navigateByUrl('/dashboard')

  }

}
