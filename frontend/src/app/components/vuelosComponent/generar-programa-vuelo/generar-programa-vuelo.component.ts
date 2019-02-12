import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generar-programa-vuelo',
  templateUrl: './generar-programa-vuelo.component.html',
  styleUrls: ['./generar-programa-vuelo.component.css']
})
export class GenerarProgramaVueloComponent implements OnInit {
  model: NgbDateStruct;
  time = {hour: 13, minute: 30};
  var1:string;
  ProgramaOrigen;
  ProgramaDestino;
  ProgramaFechaS;
  ProgramaFechaL;
  ProgramaHoraS;
  ProgramaHoraL;
  ProgramaEscala:boolean;

  constructor(private calendar: NgbCalendar) { 
    
    
  }
  ngOnInit() {
    this.ProgramaEscala=false;
  }
  
  addPrograma(form:NgForm){
    console.log(this.ProgramaEscala);
    console.log('entro al add');
   console.log(form);
  }




}
