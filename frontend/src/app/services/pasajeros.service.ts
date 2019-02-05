import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pasajero} from './../models/pasajero';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  selectedPasajero: Pasajero;
  

  
  URL_API ='http://localhost:3002/pasajero';




  constructor(private http:HttpClient) { 
      this.selectedPasajero=new Pasajero();
    
  }
  

  
  getPasajeros():Observable<any>{

    return this.http.get<Pasajero>(this.URL_API);

  }
  postPasajero(pasajero:Pasajero){
    console.log("pasajero",pasajero)
 
    return this.http.post<Pasajero>(this.URL_API+'/create', pasajero);
  }
  // Actualizar
  putPasajero(pasajero:Pasajero):Observable<Pasajero>{
    return this.http.post<Pasajero>(this.URL_API+`/${pasajero.pasaporte}`+'/update',pasajero);
  }

  deletePasajero(pasaporte:string){
    return this.http.post(this.URL_API+`/${pasaporte}`+'/delete', {});
  }

  getPasajero(pasaporte:string):Observable<Pasajero>{
    return this.http.get<Pasajero>(this.URL_API+`/${pasaporte}`);
  }

}
