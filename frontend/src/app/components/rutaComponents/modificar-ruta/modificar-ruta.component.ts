import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RutaService} from './../../../services/ruta.service';
import {Ruta} from '../../../models/ruta';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-modificar-ruta',
  templateUrl: './modificar-ruta.component.html',
  styleUrls: ['./modificar-ruta.component.css'],
  providers:[RutaService]
})
export class ModificarRutaComponent implements OnInit {
  rutas:Observable<Ruta>;
  selectedRuta;
  cambia;
  constructor(private rutaservice:RutaService) { }

  ngOnInit() {
    this.rutaservice.getRutas().subscribe(res=>{
      this.rutas=res;
    },err=>{
      console.log(err);
    });
  }
  changeRuta(event){
    console.log(this.selectedRuta)
    this.rutaservice.getRuta(this.selectedRuta).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }

  addRuta(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.rutaservice.putRuta(form.value).subscribe(res=>{
     console.log(res);
     
   });
   form.reset();
  }

}
