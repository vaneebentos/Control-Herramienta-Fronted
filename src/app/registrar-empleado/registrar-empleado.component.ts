import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Route, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

  empleado : Empleado = new Empleado();
  

  constructor (private empleadoServicio:EmpleadoService,private router:Router){ }



  ngOnInit(): void {
  }

  // metodo nuevo para guardar
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
      tap(dato => {
        console.log("Operacion Exitosa",dato) ;
        this.irALaListaDeEmpleado();
      }),
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        throw error; 
      })
    ).subscribe();
  }

  irALaListaDeEmpleado(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
     //console.log(this.empleado);
     this.guardarEmpleado();

  }

}
