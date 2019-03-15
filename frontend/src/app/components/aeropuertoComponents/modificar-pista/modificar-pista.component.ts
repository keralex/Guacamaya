import { Component, OnInit } from '@angular/core';
import {PistaService} from './../../../services/pista.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pista } from 'src/app/models/pista';
@Component({
  selector: 'app-modificar-pista',
  templateUrl: './modificar-pista.component.html',
  styleUrls: ['./modificar-pista.component.css'],
  providers:[PistaService]
})
export class ModificarPistaComponent implements OnInit {
  pistas:Observable<Pista>;
  selectedPista;
  cambia;
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
    this.pistaservice.getPista(this.selectedPista).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }
  addPista(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.pistaservice.putPista(form.value).subscribe(res=>{
     console.log(res);
     
   });
   form.reset();
  }

  

}
