import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Vuelo} from './../../../models/vuelo';
import {VuelosService } from './../../../services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
  providers:[VuelosService]
})
export class VuelosComponent implements OnInit {
  vuelos:Observable<Vuelo>

  constructor(private vuelosservice:VuelosService) { }

  ngOnInit() {
    this.vuelosservice.getVuelos().subscribe(res=>{
      this.vuelos=res;
    },err=>{
      console.log(err);
    })
  }

}
