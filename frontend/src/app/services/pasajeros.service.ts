import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pasajero} from './../models/pasajero';
@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  selectedPasajero: Pasajero;
  selectedPasajeroName:string;
  selectedPasajeroId:number;

  
  pasajeros: Pasajero[];
  URL_API ='http://localhost:3002/catalog/customer/create';




  constructor(private http:HttpClient) { 
      this.selectedPasajero=new Pasajero();
    
  }
  

  
  getPasajeros(){
    return this.http.get(this.URL_API);
  }
  postPasajero(pasajero:Pasajero){
    console.log("pasajero",pasajero)
 
    return this.http.post<Pasajero>(this.URL_API, pasajero);
  }
  // Actualizar
  putPasajero(pasajero:Pasajero){
    return this.http.put(this.URL_API+`/${pasajero.customer_id}`,pasajero);
  }

  deletePasajero(_id:number){
    return this.http.delete(this.URL_API+`/${_id}`);
  }

}
