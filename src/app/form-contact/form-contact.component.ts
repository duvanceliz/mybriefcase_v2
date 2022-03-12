import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Contact } from '../Models/Contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  aFormGroup!: FormGroup;

  constructor(private http:HttpServiceService, private formBuilder: FormBuilder) { 

  }
  
  name:string='';
  last:string='';
  email:string ='';
  content:string = '';
  contact:Contact = new Contact();
  error:string = '';
  exito:string = '';
  loading:Boolean = false;
  valCap:Boolean = false;

  siteKey:string='6LfiKtIeAAAAAMT_st_upDhjScZcTN9lm8t-By4z';

  @ViewChild('captchaElem ')
  captcha!: ElementRef;

  ngOnInit(): void {
    
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  
  handleSuccess(){
    this.valCap = true;
  }

  sendEmail(){
    


    if((this.name && this.last && this.email && this.content)!=''){
      
    
    if(this.valCap){

      this.loading=true;

      this.error='';
      this.contact.name = this.name;
      this.contact.last = this.last;
      this.contact.email = this.email;
      this.contact.content = this.content;
  
      this.http.setComent(this.contact).subscribe(data =>{  
        this.exito = 'Su mensaje ha sido entregado con éxito. Gracias'
        this.loading = false;
      },error=>{
        this.error = error.message;
      });

    }else{
      this.error = 'valide que no es un robot';
    }
   
    }else{

      this.error = 'Lo campos no pueden estar vacios';

    }
    
    
  }

}
