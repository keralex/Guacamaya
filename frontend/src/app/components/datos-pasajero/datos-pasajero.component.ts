import { Component, OnInit } from '@angular/core';
import {PasajerosService} from './../../services/pasajeros.service';
import { Pasajero } from 'src/app/models/pasajero';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-datos-pasajero',
  templateUrl: './datos-pasajero.component.html',
  styleUrls: ['./datos-pasajero.component.css'],
  providers:[PasajerosService]
})
export class DatosPasajeroComponent implements OnInit {
  
  constructor(private pasajeroservice:PasajerosService) {
  
   }

  ngOnInit() {
  }

  addPasajero(form:NgForm){
    console.log(form.value);
    this.pasajeroservice.postPasajero(form.value).subscribe(res=>{
      console.log('entro al post')
      console.log(res);
    });

  }



}
