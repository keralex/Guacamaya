import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AvionService} from './../../../services/avion.service';
import {Avion} from './../../../models/avion';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-eliminar-avion',
  templateUrl: './eliminar-avion.component.html',
  styleUrls: ['./eliminar-avion.component.css'],
  providers:[AvionService]
})
export class EliminarAvionComponent implements OnInit {
aviones:Observable<Avion>;
selectedAvion;
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
  }
  
  deleteAvion(form:NgForm){
    this.avionservice.deleteAvion(this.selectedAvion).subscribe(res => {
      console.log(res);
    
    });
  form.reset();
  }
}
