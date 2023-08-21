import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent  implements OnInit{


  empleados:Empleado [];
 

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados (); // es un metodo y se ejecuta solo una vez por en ngOnInit

}
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number){
   swal({
    title: '¿Estas seguro?',
    text: "Confirmar la eliminación",
    type:'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText: 'Si',
    cancelButtonText:'No',
    confirmButtonClass:'btn btn-success',
    cancelButtonClass: 'btn btn-danger',

   }).then((result) => {
    if (result.value) {
      this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
        console.log(dato);
        this.obtenerEmpleados();
        swal(
          'Empleado eliminado',
          'Eliminación exitosa',
          'success'
        );
      });
    }
   });
  }

 private obtenerEmpleados (){
  this.empleadoServicio.obetenerListaDeEmpleados().subscribe(dato => {
    this.empleados = dato;
    });
 }

 verDetallesDelEmpleado(id:number){
  this.router.navigate(['empleado-detalles',id]);
 }


}
