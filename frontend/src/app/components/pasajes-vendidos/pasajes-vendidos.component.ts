import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';

@Component({
  selector: 'app-pasajes-vendidos',
  templateUrl: './pasajes-vendidos.component.html',
  styleUrls: ['./pasajes-vendidos.component.css'],  
  providers:[PasajerosService]
})
export class PasajesVendidosComponent implements OnInit {
  pasajeros;

  constructor(private pasajeroservice:PasajerosService) {
    this.pasajeros=this.pasajeroservice.getPasajeros();
    console.log(this.pasajeros);

   }

  ngOnInit() {
  }

}
