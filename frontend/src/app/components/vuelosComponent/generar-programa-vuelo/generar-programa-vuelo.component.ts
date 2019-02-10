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
    
  }
  
  addPrograma(form:NgForm){
    
    this.var1="0"+this.model.month.toString()+"0"+this.model.day.toString();
   console.log(this.var1);

  }




}
