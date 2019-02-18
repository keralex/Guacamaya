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
  selectedPasajeroName:string;
  selectedPasajeroApellido:string;
  selectedPasajeroPasaporte:string;
  selectedPasajeroEdad:number;
  selectedPasajeroSexo:string;
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
    console.log(this.selectedPasajeroPasaporte);
    
    this.pasajeroservice.getPasajero(this.selectedPasajeroPasaporte).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();

    });
  }

  AsignarDatos(){
    console.log(this.pasajero);
    this.cambia=true;

  }

  updatePasajero(form:NgForm){
    console.log('entre al update')
    console.log(form.value);
    this.pasajero=form.value;

    this.pasajeroservice.putPasajero(form.value).subscribe(res=>{
      console.log(res);
    });
;
  

}
}
