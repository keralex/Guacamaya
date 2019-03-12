import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import {Vuelo} from './../../../models/vuelo';
import {VuelosService } from './../../../services/vuelos.service';
@Component({
  selector: 'app-modificar-vuelo',
  templateUrl: './modificar-vuelo.component.html',
  styleUrls: ['./modificar-vuelo.component.css']
})
export class ModificarVueloComponent implements OnInit {
  vuelos:Observable<Vuelo>;
  cambia:boolean;
  selectedVuelo;
  vuelo:Vuelo;
  id;
  constructor(private vuelosservice:VuelosService) { }

  ngOnInit() {
    this.vuelosservice.getVuelos().subscribe(res => {
      this.vuelos=res;
      console.log(res);
    },err=>{
      console.log(err);
    });
  }

  changeVuelo(event){
    console.log(this.id);
    this.vuelosservice.getVuelo(this.id).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }

  addVuelo(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.vuelosservice.putVuelo(form.value).subscribe(res=>{
     console.log(res);
     
   });
   form.reset();

  }

}
