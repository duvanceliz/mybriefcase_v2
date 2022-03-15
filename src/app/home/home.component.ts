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
import { HttpServiceService } from '../http-service.service';
import { Views } from '../Models/Views';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class HomeComponent implements OnInit {

  constructor(private renderer2: Renderer2, private http:HttpServiceService){}

  i:boolean = true;
  views:Views = new Views();

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

       if(windowScrollPos > imgTwo.offsetTop/2){
        this.renderer2.addClass(imgTwo,'mover-right2');

       }
       if(windowScrollPos > imgThree.offsetTop/2){
      this.renderer2.addClass(imgThree,'mover-right');

       }
        
  };

  
  ngOnInit(): void {

    this.views.views = 1;
    this.http.viewsSave(this.views).subscribe(data =>{
     
   });
    
   
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
