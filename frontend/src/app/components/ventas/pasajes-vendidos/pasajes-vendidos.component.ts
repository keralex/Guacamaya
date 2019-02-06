import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { Pasajero } from 'src/app/models/pasajero';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pasajes-vendidos',
  templateUrl: './pasajes-vendidos.component.html',
  styleUrls: ['./pasajes-vendidos.component.css'],  
  providers:[PasajerosService]
})
export class PasajesVendidosComponent implements OnInit {
  pasajeros:Observable<Pasajero>;

  constructor(private pasajeroservice:PasajerosService) {

  }

  ngOnInit() {
    console.log('entro al constructor');
    this.pasajeroservice.getPasajeros().subscribe(res=>{
      console.log(res);
      this.pasajeros=res;
      console.log(this.pasajeros);
    },err=>{
      console.log(err);
    });

  }

}
