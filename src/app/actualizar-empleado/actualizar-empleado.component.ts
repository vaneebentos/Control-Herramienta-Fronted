import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { catchError, tap } from 'rxjs';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  empleadoId: number;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.empleadoId = params['id'];
      this.obtenerEmpleado();
    });
  }

  obtenerEmpleado() {
    this.empleadoService.obtenerEmpleadoPorId(this.empleadoId).subscribe(
      empleado => {
        this.empleado = empleado;
    })
 }

  actualizarEmpleado() {
    this.empleadoService.actualizarEmpleadoPorId(this.empleadoId, this.empleado).pipe(
      tap(dato => {
        console.log("Datos actualizados del empleado:", this.empleado);
        this.irALaListaDeEmpleados();
      }),
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        throw error;
      })
    ).subscribe();
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.actualizarEmpleado();
   }
  }
