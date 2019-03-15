import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AeropuertoService } from 'src/app/services/aeropuerto.service';

@Component({
  selector: 'app-registrar-aeropuerto',
  templateUrl: './registrar-aeropuerto.component.html',
  styleUrls: ['./registrar-aeropuerto.component.css'],
  providers:[AeropuertoService]
})
export class RegistrarAeropuertoComponent implements OnInit {

  constructor(private aeropuertoservice:AeropuertoService) { }

  ngOnInit() {
  }
  addAeropuerto(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.aeropuertoservice.postAeropuerto(form.value).subscribe(res=>{
    console.log('entro al post');
    console.log(res); 
   });
   form.reset();
}
}
