import { Component, OnInit } from '@angular/core';
import {RutaService} from './../../../services/ruta.service';
import {Ruta} from '../../../models/ruta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css'],
  providers:[RutaService]
})
export class RutasComponent implements OnInit {
  rutas:Observable<Ruta>;

  constructor(private rutaservice:RutaService) { }

  ngOnInit() {

    this.rutaservice.getRutas().subscribe(res=>{
      this.rutas=res;
    },err=>{
      console.log(err);
    });
  }

}
