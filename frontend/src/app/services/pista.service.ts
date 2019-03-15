import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pista} from './../models/pista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PistaService {

  URL_API ='http://localhost:3002/pista';

  constructor(private http:HttpClient) { }

   //obtener pistas
   getPistas():Observable<any>{

    return this.http.get<Pista>(this.URL_API);

  }
  //post
  postPista(pista:Pista){
    console.log("Pista",pista);
 
    return this.http.post<Pista>(this.URL_API+'/create', pista);

  }
  // Actualizar
  putPista(pista:Pista):Observable<Pista>{
    return this.http.post<Pista>(this.URL_API+`/${pista.id}`+'/update',pista);
  }
  //borrar pista

  deletePista(id:number){
    return this.http.post(this.URL_API+`/${id}`+'/delete', {});
  }
  //obtener una pista
    getPista(id:number):Observable<Pista>{
    return this.http.get<Pista>(this.URL_API+`/${id}`);
  }
}
