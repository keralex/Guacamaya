import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramaVuelo } from 'src/app/models/programa-vuelo';
import { ProgramaVueloService } from 'src/app/services/programa-vuelo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modificar-programa-vuelo',
  templateUrl: './modificar-programa-vuelo.component.html',
  styleUrls: ['./modificar-programa-vuelo.component.css']
})
export class ModificarProgramaVueloComponent implements OnInit {
  programaVuelos:Observable<ProgramaVuelo>;
  cambia:boolean;
  selectedPrograma;
  Programa:ProgramaVuelo;
  id;
  var1:string;
  ProgramaOrigen;
  ProgramaDestino:String;
  ProgramaFechaS;
  ProgramaFechaL;
  ProgramaHoraS;
  ProgramaHoraL;
  ProgramaEscala:boolean;
  


  constructor(private programavueloservice:ProgramaVueloService) { }

  ngOnInit() {
    this.programavueloservice.getPrograma_vuelos().subscribe(res => {
      this.programaVuelos=res;
    },err=>{
      console.log(err);
    });
  }

  
  changePrograma(event){
    console.log(this.id);
    this.programavueloservice.getPrograma_vuelo(this.id).subscribe(res=>{
      console.log(res);
      this.AsignarDatos();
      
    })
  }
  AsignarDatos(){
    this.cambia=true;
  }

  addPrograma(form:NgForm){
    console.log('entro al add');
   console.log(form.value);
   this.programavueloservice.putPrograma_vuelo(form.value).subscribe(res=>{
     console.log(res);
     
   });


  }
}
