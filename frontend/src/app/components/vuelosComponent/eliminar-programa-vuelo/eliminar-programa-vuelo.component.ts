import { Component, OnInit } from '@angular/core';
import {ProgramaVueloService} from './../../../services/programa-vuelo.service';
import {ProgramaVuelo} from './../../../models/programa-vuelo'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-eliminar-programa-vuelo',
  templateUrl: './eliminar-programa-vuelo.component.html',
  styleUrls: ['./eliminar-programa-vuelo.component.css']
})
export class EliminarProgramaVueloComponent implements OnInit {
  programaVuelos:Observable<ProgramaVuelo>;
  selectedPrograma;

  constructor(private programavueloservice:ProgramaVueloService) { }

  ngOnInit() {
    this.programavueloservice.getPrograma_vuelos().subscribe(res => {
      this.programaVuelos=res;
    },err=>{
      console.log(err);
    });
  }

  changePrograma(event){
    console.log(this.selectedPrograma);
  }
  deletePrograma(form:NgForm){
    this.programavueloservice.deletePrograma_vuelo(this.selectedPrograma).subscribe(res => {
      console.log(res);
      form.reset();
    });

  }

}
