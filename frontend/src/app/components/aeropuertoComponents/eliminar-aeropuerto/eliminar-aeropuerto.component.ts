import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';
import {Aeropuerto} from './../../../models/aeropuerto';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-eliminar-aeropuerto',
  templateUrl: './eliminar-aeropuerto.component.html',
  styleUrls: ['./eliminar-aeropuerto.component.css'],
  providers:[AeropuertoService]
})
export class EliminarAeropuertoComponent implements OnInit {
  aeropuertos:Observable<Aeropuerto>;
  selectedAeropuerto;
  constructor(private aeropuertoservice:AeropuertoService) { }

  ngOnInit() {
    this.aeropuertoservice.getAeropuertos().subscribe(res=>{
      this.aeropuertos=res;
    },err=>{
      console.log(err);
    })
  }
  changeAeropuerto(event){
    console.log(this.selectedAeropuerto);
  }
  
  deleteAeropuerto(form:NgForm){
    this.aeropuertoservice.deleteAeropuerto(this.selectedAeropuerto).subscribe(res => {
      console.log(res);
    
    });
  form.reset();
  }
}
