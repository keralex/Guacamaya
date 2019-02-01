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
  

  
  URL_API ='http://localhost:3002/catalog/pasajero';




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
  putPasajero(pasajero:Pasajero){
    return this.http.put(this.URL_API+`/${pasajero.pasajero_id}`+'/update',pasajero);
  }

  deletePasajero(_id:number){
    return this.http.delete(this.URL_API+`/${_id}`+'/delete');
  }

  getPasajero(_id:number){
    return this.http.get<Pasajero>(this.URL_API+`/${_id}`);
  }

}
