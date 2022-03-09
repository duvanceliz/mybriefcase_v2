import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Scroll } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  constructor(private renderer2: Renderer2){


  }
 
  title:string='';
  
  ngOnInit(): void {
    
   
  }
 

}
