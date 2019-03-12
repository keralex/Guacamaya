import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {VuelosService} from './../../../services/vuelos.service'
import { Vuelo } from 'src/app/models/vuelo';
@Component({
  selector: 'app-planificar-vuelo',
  templateUrl: './planificar-vuelo.component.html',
  styleUrls: ['./planificar-vuelo.component.css'],
  providers:[VuelosService]
})
export class PlanificarVueloComponent implements OnInit {

  ruta_id;
  avion_id;
  constructor(private vuelosservice:VuelosService) { }

  ngOnInit() {
  }
  
  addVuelo(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
    this.vuelosservice.postVuelo(form.value).subscribe(res=>{
      console.log('entro al post');
      console.log(res);  
      form.reset();
    

    });
}
}
