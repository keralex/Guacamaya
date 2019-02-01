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
  selectedPasajeroName:string;
  selectedPasajeroApellido:string;
  selectedPasajeroPasaporte:string;
  selectedPasajeroEdad:number;
  selectedPasajeroSexo:string;
  selectedPasajeroPasaje:string;

  public sexos=['Masculino','Femenino','no definido'];

  constructor(private pasajeroservice:PasajerosService) {
  
   }

  ngOnInit() {
  }

  addPasajero(form:NgForm){
    console.log(form.value);
    this.pasajeroservice.selectedPasajero.nombre=this.selectedPasajeroName;
    this.pasajeroservice.selectedPasajero.apellido=this.selectedPasajeroApellido;
    this.pasajeroservice.selectedPasajero.edad=this.selectedPasajeroEdad;
    this.pasajeroservice.selectedPasajero.pasaporte=this.selectedPasajeroPasaporte;
    this.pasajeroservice.selectedPasajero.pasaje=this.selectedPasajeroPasaje;
    this.pasajeroservice.selectedPasajero.sexo=this.selectedPasajeroSexo;

   console.log(this.pasajeroservice.selectedPasajero);
  
    this.pasajeroservice.postPasajero(this.pasajeroservice.selectedPasajero).subscribe(res=>{
      console.log('entro al post');
      console.log(res);
    });

  

  }




}
