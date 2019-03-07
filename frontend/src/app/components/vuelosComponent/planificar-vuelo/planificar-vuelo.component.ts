import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VuelosService } from 'src/app/services/vuelos.service';
import {Vuelo} from './../../../models/vuelo'
@Component({
  selector: 'app-planificar-vuelo',
  templateUrl: './planificar-vuelo.component.html',
  styleUrls: ['./planificar-vuelo.component.css'],
  providers:[VuelosService]

})
export class PlanificarVueloComponent implements OnInit {

  constructor(private vueloservice:VuelosService) {  }
  avion_id:number;
  ruta_id:number;

  ngOnInit() {
  }
  addVuelo(form:NgForm){
    console.log('entro al add');
    console.log(form.value);
     this.vueloservice.postVuelo(form.value).subscribe(res=>{
       console.log('entro al post');
       console.log(res);  
       form.reset();
     });
  }

}
