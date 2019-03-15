import { Component, OnInit } from '@angular/core';
import {PistaService} from './../../../services/pista.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pista } from 'src/app/models/pista';

@Component({
  selector: 'app-eliminar-pista',
  templateUrl: './eliminar-pista.component.html',
  styleUrls: ['./eliminar-pista.component.css'],
  providers:[PistaService]

})
export class EliminarPistaComponent implements OnInit {
  pistas:Observable<Pista>;
  selectedPista;
  constructor(private pistaservice:PistaService) { }

  ngOnInit() {
    this.pistaservice.getPistas().subscribe(res=>{
      this.pistas=res;
    },err=>{
      console.log(err);
    })
  }
  changePista(event){
    console.log(this.selectedPista);
  }
  
  deletePista(form:NgForm){
    this.pistaservice.deletePista(this.selectedPista).subscribe(res => {
      console.log(res);
    });
  form.reset();
  }

}
