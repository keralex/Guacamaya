import { Component, OnInit } from '@angular/core';
import {PasajerosService} from '../../../services/pasajeros.service';
import { Pasajero } from 'src/app/models/pasajero';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eliminar-pasajero',
  templateUrl: './eliminar-pasajero.component.html',
  styleUrls: ['./eliminar-pasajero.component.css'],
  providers:[PasajerosService]

})
export class EliminarPasajeroComponent implements OnInit {

  pasajeros:Observable<Pasajero>;
  selectedPasajeroPasaporte;
  
  constructor(private pasajeroservice:PasajerosService) { }

  ngOnInit() {
    console.log('entro al constructor');
    this.pasajeroservice.getPasajeros().subscribe(res=>{
      console.log(res);
      this.pasajeros=res;
      console.log(this.pasajeros);
    },err=>{
      console.log(err);
    });
  }
  changePasajero(event){
    console.log('cambio el pasajero');
    console.log(this.selectedPasajeroPasaporte);

  }
  deletePasajero(form:NgForm){
    console.log(form.value);
    this.pasajeroservice.deletePasajero(this.selectedPasajeroPasaporte).subscribe(res=>{
      console.log('entro al delete');
      console.log(res);
    });    
  }



}
