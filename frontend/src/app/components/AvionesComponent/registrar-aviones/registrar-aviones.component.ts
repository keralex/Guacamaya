import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AvionService} from './../../../services/avion.service';
import {Avion} from './../../../models/avion';
@Component({
  selector: 'app-registrar-aviones',
  templateUrl: './registrar-aviones.component.html',
  styleUrls: ['./registrar-aviones.component.css'],
  providers:[AvionService]
})
export class RegistrarAvionesComponent implements OnInit {

  constructor(private avionservice:AvionService) { }

  ngOnInit() {
  }
  addAvion(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.avionservice.postAvion(form.value).subscribe(res=>{
      console.log('entro al post');
      console.log(res);  
      form.reset();
    });

}


}
