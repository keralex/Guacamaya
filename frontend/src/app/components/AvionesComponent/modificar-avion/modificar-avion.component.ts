import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AvionService} from './../../../services/avion.service';
import {Avion} from './../../../models/avion';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modificar-avion',
  templateUrl: './modificar-avion.component.html',
  styleUrls: ['./modificar-avion.component.css'],
  providers:[AvionService]
})
export class ModificarAvionComponent implements OnInit {
  aviones:Observable<Avion>;
  selectedAvion;
  cambia;
  constructor(private avionservice:AvionService) { }

  ngOnInit() {
    this.avionservice.getAvions().subscribe(res=>{
      this.aviones=res;
    },err=>{
      console.log(err);
    })
  }
  changeAvion(event){
    console.log(this.selectedAvion);
    this.avionservice.getAvion(this.selectedAvion).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }
  addAvion(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.avionservice.putAvion(form.value).subscribe(res=>{
     console.log(res);
     
   });
   form.reset();
  }


}
