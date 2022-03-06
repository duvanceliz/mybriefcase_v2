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
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit{
  constructor(private renderer2: Renderer2){


  }
 
  title:string='';

  i:boolean = true;

  @ViewChild('btnHamburger')
  btnHamburger!: ElementRef;

  @ViewChild('navbar')
  nav!: ElementRef;

  @ViewChild('imgOne')
  imgOne!: ElementRef;

  @ViewChild('imgTwo')
  imgTwo!: ElementRef;
  
  @ViewChild('imgThree')
  imgThree!: ElementRef;


  @HostListener('window:scroll',['$event']) 
  onScroll($event:Scroll):void {
        const imgOne = this.imgOne.nativeElement;
        const imgTwo = this.imgTwo.nativeElement;
        const imgThree = this.imgThree.nativeElement;
      
     
       let windowScrollPos = window.scrollY
       
       if(windowScrollPos >imgOne.offsetTop/4){

        this.renderer2.addClass(imgOne,'mover-right');
        
       }

       if(windowScrollPos > imgTwo.offsetTop/1.5){
        this.renderer2.addClass(imgTwo,'mover-right2');

       }
       if(windowScrollPos > imgThree.offsetTop/1.2){
      this.renderer2.addClass(imgThree,'mover-right');

       }
        
  };

  
  ngOnInit(): void {
    
   
  }
 
  onClick(){
  
    const btnH = this.btnHamburger.nativeElement;
    const navB = this.nav.nativeElement;
    
    if(this.i){

      this.renderer2.setAttribute(btnH,'class','open')
      this.renderer2.setAttribute(navB,'class','open')
   
      this.i = !this.i;

    }else{
      this.renderer2.setAttribute(btnH,'class','close')
      this.renderer2.setAttribute(navB,'class','close')
  
      this.i = !this.i;
    }

  }
}
