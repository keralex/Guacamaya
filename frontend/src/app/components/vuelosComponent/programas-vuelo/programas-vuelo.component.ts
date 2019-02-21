import { Component, OnInit } from '@angular/core';
import {ProgramaVueloService} from './../../../services/programa-vuelo.service';
import {ProgramaVuelo} from './../../../models/programa-vuelo'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programas-vuelo',
  templateUrl: './programas-vuelo.component.html',
  styleUrls: ['./programas-vuelo.component.css']
})
export class ProgramasVueloComponent implements OnInit {
  programaVuelos:Observable<ProgramaVuelo>
  constructor(private programavueloservice:ProgramaVueloService) { }

  ngOnInit() {
    this.programavueloservice.getPrograma_vuelos().subscribe(res => {
      this.programaVuelos=res;
    },err=>{
      console.log(err);
    })
  }

}
