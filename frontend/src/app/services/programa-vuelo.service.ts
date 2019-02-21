import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ProgramaVuelo} from './../models/programa-vuelo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaVueloService {

  URL_API ='http://localhost:3002/programa_vuelo';

  constructor(private http:HttpClient) { }

  getPrograma_vuelos():Observable<any>{

    return this.http.get<ProgramaVuelo>(this.URL_API);

  }
  postPrograma_vuelo(Programa_vuelo:ProgramaVuelo){
    console.log("Programa_vuelo",Programa_vuelo);
 
    return this.http.post<ProgramaVuelo>(this.URL_API+'/create', Programa_vuelo);

  }
  // Actualizar
  putPrograma_vuelo(Programa_vuelo:ProgramaVuelo):Observable<ProgramaVuelo>{
    return this.http.post<ProgramaVuelo>(this.URL_API+`/${Programa_vuelo.id}`+'/update',Programa_vuelo);
  }

  deletePrograma_vuelo(id:number){
    return this.http.post(this.URL_API+`/${id}`+'/delete', {});
  }

  getPrograma_vuelo(id:number):Observable<ProgramaVuelo>{
    return this.http.get<ProgramaVuelo>(this.URL_API+`/${id}`);
  }



}
