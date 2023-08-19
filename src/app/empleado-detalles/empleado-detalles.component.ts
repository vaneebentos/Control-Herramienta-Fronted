import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpeladoService } from '../empelado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit{

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute,private empleadoServico:EmpeladoService){

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.empleado= new Empleado();
    this.empleadoServico.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado= dato;
      swal(`Detalle del empleado ${this.empleado.nombre}`);
    });
  }

}
