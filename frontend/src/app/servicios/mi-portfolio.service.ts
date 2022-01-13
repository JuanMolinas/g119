import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiPortfolioService {

  constructor(private http:HttpClient) { 
    console.log("El servicio está corriendo");
  }

  obtenerDatosPersona():Observable<any>{
   return this.http.get('./assets/data/persona.json');
  }
}