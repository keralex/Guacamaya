import { Component, OnInit } from '@angular/core';
import {PistaService} from './../../../services/pista.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pista } from 'src/app/models/pista';
@Component({
  selector: 'app-pistas',
  templateUrl: './pistas.component.html',
  styleUrls: ['./pistas.component.css'],
  providers:[PistaService]
})
export class PistasComponent implements OnInit {
  pistas:Observable<Pista>;

  constructor(private pistaservice:PistaService) { }

  ngOnInit() {
    this.pistaservice.getPistas().subscribe(res=>{
      this.pistas=res;
    },err=>{
      console.log(err);
    })
  }

}
