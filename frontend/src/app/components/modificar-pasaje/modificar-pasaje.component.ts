import { Component, OnInit } from '@angular/core';
import { PasajerosService } from 'src/app/services/pasajeros.service';
import { Pasajero } from 'src/app/models/pasajero';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modificar-pasaje',
  templateUrl: './modificar-pasaje.component.html',
  styleUrls: ['./modificar-pasaje.component.css'],
  providers:[PasajerosService]

})
export class ModificarPasajeComponent implements OnInit {


  pasajeros:Observable<Pasajero>;
  selectedPasajero_Id;
  selectedPasajeroName:string;
  selectedPasajeroApellido:string;
  selectedPasajeroPasaporte:string;
  selectedPasajeroEdad:number;
  selectedPasajeroSexo:string;
  selectedPasajeroPasaje:string;
  pasajero:Pasajero;
  cambia:boolean;
  public sexos=['Masculino','Femenino','no definido'];




  constructor(private pasajeroservice:PasajerosService) {
    this.cambia=false;
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

  //funciones

  changePasajero(event){
    console.log('cambio el pasajero');
    console.log(this.selectedPasajero_Id);
    
    this.pasajeroservice.getPasajero(this.selectedPasajero_Id).subscribe(res=>{
      console.log(res);
      this.pasajero=res;
      console.log(this.pasajero);
      this.AsignarDatos(this.pasajero);

    });
  }

  AsignarDatos(pasajero:Pasajero){
    this.cambia=true;
    console.log(pasajero);
    this.pasajero=pasajero;
  }

  updatePasajero(form:NgForm){
    console.log(form.value);
    this.pasajero.nombre=this.selectedPasajeroName;
    this.pasajero.apellido=this.selectedPasajeroApellido;
    this.pasajero.edad=this.selectedPasajeroEdad;
    this.pasajero.pasaporte=this.selectedPasajeroPasaporte;
    this.pasajero.pasaje=this.selectedPasajeroPasaje;
    this.pasajero.sexo=this.selectedPasajeroSexo;

    this.pasajeroservice.putPasajero(this.pasajero).subscribe(res=>{
      console.log('entro al put');
      console.log(res);
    });
;
  

}
}
