import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Aeropuerto} from './../models/aeropuerto';
@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  URL_API ='http://localhost:3002/aeropuerto';

  constructor(private http:HttpClient) { }
  //obtener aeropuertos
  getAeropuertos():Observable<any>{

    return this.http.get<Aeropuerto>(this.URL_API);

  }
  //post
  postAeropuerto(aeropuerto:Aeropuerto){
    console.log("Aeropuerto",aeropuerto);
 
    return this.http.post<Aeropuerto>(this.URL_API+'/create', aeropuerto);

  }
  // Actualizar
  putAeropuerto(aeropuerto:Aeropuerto):Observable<Aeropuerto>{
    return this.http.post<Aeropuerto>(this.URL_API+`/${aeropuerto.IATA}`+'/update',aeropuerto);
  }
  //borrar aeropuerto

  deleteAeropuerto(IATA:string){
    return this.http.post(this.URL_API+`/${IATA}`+'/delete', {});
  }
  //obtener una aeropuerto
    getAeropuerto(IATA:string):Observable<Aeropuerto>{
    return this.http.get<Aeropuerto>(this.URL_API+`/${IATA}`);
  }
}
