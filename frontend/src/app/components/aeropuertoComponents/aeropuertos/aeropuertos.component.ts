import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';
import {Aeropuerto} from './../../../models/aeropuerto';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-aeropuertos',
  templateUrl: './aeropuertos.component.html',
  styleUrls: ['./aeropuertos.component.css'],
  providers:[AeropuertoService]
})
export class AeropuertosComponent implements OnInit {
  aeropuertos:Observable<Aeropuerto>;

  constructor(private aeropuertoservice:AeropuertoService) { }

  ngOnInit() {
    this.aeropuertoservice.getAeropuertos().subscribe(res=>{
      this.aeropuertos=res;
    },err=>{
      console.log(err);
    })
  }

}
