import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Avion} from './../models/avion';
@Injectable({
  providedIn: 'root'
})
export class AvionService {
  URL_API ='http://localhost:3002/avion';

  constructor(private http:HttpClient) { }
  //obtener avions
  getAvions():Observable<any>{
    
    return this.http.get<Avion>(this.URL_API);

  }
  //post
  postAvion(avion:Avion){
    console.log("Avion",avion);
 
    return this.http.post<Avion>(this.URL_API+'/create', avion);

  }
  // Actualizar
  putAvion(avion:Avion):Observable<Avion>{
    return this.http.post<Avion>(this.URL_API+`/${avion.id}`+'/update',avion);
  }
  //borrar avion

  deleteAvion(id:number){
    return this.http.post(this.URL_API+`/${id}`+'/delete', {});
  }
  //obtener una avion
    getAvion(id:number):Observable<Avion>{
    return this.http.get<Avion>(this.URL_API+`/${id}`);
  
  }
}
