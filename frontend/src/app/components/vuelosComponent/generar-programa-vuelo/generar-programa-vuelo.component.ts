import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {ProgramaVueloService} from './../../../services/programa-vuelo.service';
import {ProgramaVuelo} from './../../../models/programa-vuelo'


@Component({
  selector: 'app-generar-programa-vuelo',
  templateUrl: './generar-programa-vuelo.component.html',
  styleUrls: ['./generar-programa-vuelo.component.css'],
  providers:[ProgramaVueloService]
})
export class GenerarProgramaVueloComponent implements OnInit {
  model: NgbDateStruct;
  time = {hour: 13, minute: 30};
  var1:string;
  ProgramaOrigen;
  ProgramaDestino:string;
  ProgramaFechaS;
  ProgramaFechaL;
  ProgramaHoraS;
  ProgramaHoraL;
  ProgramaEscala:boolean=false;
  programa:ProgramaVuelo;

  constructor(private calendar: NgbCalendar, private programavueloservice:ProgramaVueloService) { 
    
    
  }
  ngOnInit() {
  }
  
  addPrograma(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
    this.programavueloservice.postPrograma_vuelo(form.value).subscribe(res=>{
      console.log('entro al post');
      console.log(res);
      form.reset();

    });


  }




}
