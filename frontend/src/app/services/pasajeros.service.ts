import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pasajero} from './../models/pasajero';
@Injectable({
  providedIn: 'root'
})
export class PasajerosService {

  selectedPasajero: Pasajero;
  selectedPasajeroName:String;
  
  pasajeros: Pasajero[];
  URL_API ='http//localhost:3000/customers';


  constructor(private http:HttpClient) { 
      this.selectedPasajero=new Pasajero();
    
  }
  
  getPasajeros(){
    return this.http.get(this.URL_API);
  }
  postPasajero(pasajero:Pasajero){
    return this.http.post(this.URL_API, pasajero);
  }
  // Actualizar
  putPasajero(pasajero:Pasajero){
    return this.http.put(this.URL_API+`/${pasajero._id}`,pasajero);
  }

  deletePasajero(_id:number){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
