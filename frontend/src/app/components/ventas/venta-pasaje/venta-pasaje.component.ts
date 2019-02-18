import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { Pasajero } from 'src/app/models/pasajero';

@Component({
  selector: 'app-venta-pasaje',
  templateUrl: './venta-pasaje.component.html',
  styleUrls: ['./venta-pasaje.component.css'],

})
export class VentaPasajeComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
  }

}
