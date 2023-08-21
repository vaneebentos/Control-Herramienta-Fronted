import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // esta url obtiene el listado de todos los empleados en el backend
 private baseURL ="http://localhost:8080/api/v1/empleados";
  
 
 constructor(private httpClient: HttpClient) { }

 // este metodo sirve para obtener los empleados 
 // un observable es un patron de diseño 
 obetenerListaDeEmpleados():Observable<Empleado[]>{
  return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
 }
 // este metodo sirve pará registrar un empleado
 registrarEmpleado(empleado:Empleado):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,empleado);
 }
   
  // este metodo sirve para actualizar un empleado 
  actulizarEmpleado(id:number,empleado:Empleado): Observable<Empleado>{
    return this.httpClient.put<Empleado>(`${this.baseURL}/${id}`, empleado);
  }
  // este metodo sirve para obtener o buscar un empleado 
  obtenerEmpleadoPorId(id:number): Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  actualizarEmpleadoPorId(id: number, empleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(`${this.baseURL}/${id}`,empleado);
  }
  
   eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
   }
}
