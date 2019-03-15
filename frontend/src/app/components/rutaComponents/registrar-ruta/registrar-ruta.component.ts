import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RutaService} from './../../../services/ruta.service';
import {Ruta} from '../../../models/ruta';
@Component({
  selector: 'app-registrar-ruta',
  templateUrl: './registrar-ruta.component.html',
  styleUrls: ['./registrar-ruta.component.css'],
  providers:[RutaService]
})
export class RegistrarRutaComponent implements OnInit {
  IATA1;
  IATA2;
  duracion_aprox;
  precio_base;
  distancia;
  ruta:Ruta;
  constructor(private rutaservice:RutaService) { }

  ngOnInit() {
  }
  addRuta(form:NgForm){

    console.log('entro al add');
   console.log(form.value);
   this.rutaservice.postRuta(form.value).subscribe(res=>{
      console.log('entro al post');
      console.log(res);  
      form.reset();
    });


  }

}
