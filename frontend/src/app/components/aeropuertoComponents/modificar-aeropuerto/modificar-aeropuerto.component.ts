import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';
import {Aeropuerto} from './../../../models/aeropuerto';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modificar-aeropuerto',
  templateUrl: './modificar-aeropuerto.component.html',
  styleUrls: ['./modificar-aeropuerto.component.css'],
  providers:[AeropuertoService]
})
export class ModificarAeropuertoComponent implements OnInit {
  aeropuertos:Observable<Aeropuerto>;
  selectedAeropuerto;
  cambia;
  constructor(private aeropuertoservice:AeropuertoService) { }

  ngOnInit() {
    this.aeropuertoservice.getAeropuertos().subscribe(res=>{
      this.aeropuertos=res;
    },err=>{
      console.log(err);
    });
  }
  changeAeropuerto(event){
    console.log(this.selectedAeropuerto);
    this.aeropuertoservice.getAeropuerto(this.selectedAeropuerto).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }
  addAeropuerto(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.aeropuertoservice.putAeropuerto(form.value).subscribe(res=>{
     console.log(res);
     
   });
   form.reset();
  }
}
