import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myBriefCase_v2';
  i:number = 0;

  
  onClick(){

    this.i+=1;

    const nav = document.querySelector("#hamburger button");
    const navbar = document.querySelector("nav");

    if(this.i == 1){

      nav?.classList.add('open');
      nav?.classList.remove('close');

      navbar?.classList.add('open')
      navbar?.classList.remove('close')

    }else if(this.i == 2){
      nav?.classList.remove('open')
      nav?.classList.add('close');

      navbar?.classList.add('close')
      navbar?.classList.remove('open')
      this.i=0;
    }
    
    

  }
}
