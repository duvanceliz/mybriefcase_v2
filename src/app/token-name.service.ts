import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenNameService {

  constructor() { }

  tokenName:string = '';

  getTokenName(){

    return this.tokenName;

  }

  generateRandomString(num:number){
    
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return this.tokenName=result1;
  }
}
