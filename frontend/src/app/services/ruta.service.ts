import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ruta} from './../models/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  URL_API ='http://localhost:3002/ruta';


  constructor(private http:HttpClient) { }
  //obtener rutas
  getRutas():Observable<any>{

    return this.http.get<Ruta>(this.URL_API);

  }
  //post
  postRuta(ruta:Ruta){
    console.log("Ruta",ruta);
 
    return this.http.post<Ruta>(this.URL_API+'/create', ruta);

  }
  // Actualizar
  putRuta(ruta:Ruta):Observable<Ruta>{
    return this.http.post<Ruta>(this.URL_API+`/${ruta.id}`+'/update',ruta);
  }
  //borrar ruta

  deleteRuta(id:number){
    return this.http.post(this.URL_API+`/${id}`+'/delete', {});
  }
  //obtener una ruta
    getRuta(id:number):Observable<Ruta>{
    return this.http.get<Ruta>(this.URL_API+`/${id}`);
  }

}
