import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RutaService} from './../../../services/ruta.service';
import {Ruta} from '../../../models/ruta';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-eliminar-ruta',
  templateUrl: './eliminar-ruta.component.html',
  styleUrls: ['./eliminar-ruta.component.css'],
  providers:[RutaService]
})
export class EliminarRutaComponent implements OnInit {
  rutas:Observable<Ruta>;
  selectedRuta;
  constructor(private rutaservice:RutaService) { }

  ngOnInit() {
    this.rutaservice.getRutas().subscribe(res=>{
      this.rutas=res;
    },err=>{
      console.log(err);
    });
  }
  
  changeRuta(event){
    console.log(this.selectedRuta);
  }
  deleteRuta(form:NgForm){
    this.rutaservice.deleteRuta(this.selectedRuta).subscribe(res => {
      console.log(res);
    
    });
  form.reset();
  }

}
