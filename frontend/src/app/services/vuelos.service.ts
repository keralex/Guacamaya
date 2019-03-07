import { Injectable } from '@angular/core';
import {Vuelo} from './../models/vuelo';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  URL_API ='http://localhost:3002/vuelo';

  constructor(private http:HttpClient) { }

  getVuelos():Observable<any>{
    return this.http.get<Vuelo>(this.URL_API);
  }
  postVuelo(vuelo:Vuelo){
    return this.http.post<Vuelo>(this.URL_API+'/create',vuelo);
  }
  putVuelo(vuelo:Vuelo){
    return this.http.post<Vuelo>(this.URL_API+`/${vuelo.id}`+'/update',vuelo);
  }
  deleteVuelo(id:number){
    return this.http.post(this.URL_API+`/${id}`+'/delete', {});
  }

  getVuelo(id:number):Observable<Vuelo>{
    return this.http.get<Vuelo>(this.URL_API+`/${id}`);
  }
}
