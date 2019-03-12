import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import {VuelosService} from './../../../services/vuelos.service';
import {Vuelo} from './../../../models/vuelo'

@Component({
  selector: 'app-eliminar-vuelo',
  templateUrl: './eliminar-vuelo.component.html',
  styleUrls: ['./eliminar-vuelo.component.css'],
  providers:[VuelosService]
})
export class EliminarVueloComponent implements OnInit {
  vuelos:Observable<Vuelo>;
  selectedVuelo;
  constructor(private vuelosservice:VuelosService) { }

  ngOnInit() {
    this.vuelosservice.getVuelos().subscribe(res => {
      this.vuelos=res;
    },err=>{
      console.log(err);
    });
  }

  changeVuelo(event){
    console.log(this.selectedVuelo);
  }
  deleteVuelo(form:NgForm){
    this.vuelosservice.deleteVuelo(this.selectedVuelo).subscribe(res => {
      console.log(res);
      form.reset();
    });

  }

}
