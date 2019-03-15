import { Component, OnInit } from '@angular/core';
import {AvionService} from './../../../services/avion.service';
import {Avion} from './../../../models/avion';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.css'],
  providers:[AvionService]
})
export class AvionesComponent implements OnInit {
  aviones:Observable<Avion>;

  constructor(private avionservice:AvionService) { }

  ngOnInit() {
    this.avionservice.getAvions().subscribe(res=>{
      this.aviones=res;
    },err=>{
      console.log(err);
    })  
  }

}
