import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generar-programa-vuelo',
  templateUrl: './generar-programa-vuelo.component.html',
  styleUrls: ['./generar-programa-vuelo.component.css']
})
export class GenerarProgramaVueloComponent implements OnInit {
  model: NgbDateStruct;
  var1:string;
  constructor(private calendar: NgbCalendar) { 
    
  }
  ngOnInit() {
    
  }
  
  addPasajero(form:NgForm){
    this.var1="0"+this.model.month.toString()+"0"+this.model.day.toString();
   console.log(this.var1);

  

  }



}
