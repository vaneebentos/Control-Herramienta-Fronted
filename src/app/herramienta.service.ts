import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Herramienta } from './herramienta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  private baseURL ="http://localhost:8080/api/v1/herramientas";

  constructor( private httpClient: HttpClient) { }

  obetenerListaDeHerramienta():Observable<Herramienta[]>{
    return this.httpClient.get<Herramienta[]>(`${this.baseURL}`);
   }
   // este metodo sirve pará registrar un empleado
   registrarHerramienta(herramienta:Herramienta):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,herramienta);
   }
     
    // este metodo sirve para actualizar un empleado 
    actulizarHerramienta(id:number,herramienta:Herramienta): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, herramienta);
    }
    // este metodo sirve para obtener o buscar un empleado 
    obtenerHerramientaPorId(id:number): Observable<Herramienta>{
      return this.httpClient.get<Herramienta>(`${this.baseURL}/${id}`);
    }
  
    actualizarHerramientaPorId(id: number, herramienta: Herramienta): Observable<Herramienta> {
      return this.httpClient.put<Herramienta>(`${this.baseURL}/${id}`, herramienta);
    }
    
     eliminarHerramienta(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
     }
  }
  

