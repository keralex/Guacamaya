import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {PistaService} from './../../../services/pista.service';

@Component({
  selector: 'app-registrar-pista',
  templateUrl: './registrar-pista.component.html',
  styleUrls: ['./registrar-pista.component.css'],
  providers:[PistaService]
})
export class RegistrarPistaComponent implements OnInit {

  constructor(private pistaservice:PistaService) { }

  ngOnInit() {
  }
  addPista(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.pistaservice.postPista(form.value).subscribe(res=>{
    console.log('entro al post');
    console.log(res); 
   });
   form.reset();
}

}
