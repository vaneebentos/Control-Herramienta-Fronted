import { Component } from '@angular/core';
import { Herramienta } from '../herramienta';
import { HerramientaService } from '../herramienta.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-herramientas',
  templateUrl: './lista-herramientas.component.html',
  styleUrls: ['./lista-herramientas.component.css']
})
export class ListaHerramientasComponent {
  herramientas:Herramienta [];
 

  constructor(private herramientaServicio:HerramientaService, private router:Router){}

  ngOnInit(): void {
    this.obtenerHerramienta (); // es un metodo y se ejecuta solo una vez por en ngOnInit

}
  actualizarHerramienta(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarHerramienta(id:number){
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
      this.herramientaServicio.eliminarHerramienta(id).subscribe(dato => {
        console.log(dato);
        this.obtenerHerramienta();
        swal(
          'Herramienta eliminado',
          'Herramienta exitosa',
          'success'
        );
      });
    }
   });
  }

 private obtenerHerramienta (){
  this.herramientaServicio.obetenerListaDeHerramienta().subscribe(dato => {
    this.herramientas = dato;
    });
 }

 verDetallesDelaHerramienta(id:number){
  this.router.navigate(['herramienta-detalles',id]);
 }


}


