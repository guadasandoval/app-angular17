import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder){
     this.contactForm = this.formBuilder.group({
       name:['', Validators.required],
       lastName: ['', Validators.required],
       mail: ['', [Validators.required, Validators.email]],
       zip: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
  
  ngOnInit(): void {
   
  }
  
  hasErrors(field:string, typeError:string){
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }
  enviar(e:Event){
    e.preventDefault();
    console.log("enviar");
    
  }
}
