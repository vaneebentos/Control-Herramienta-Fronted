import { Component, OnInit } from '@angular/core';
import { EmpeladoService } from '../empelado.service';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  empleado : Empleado = new Empleado();
  constructor (private empleadoServicio:EmpeladoService,private router:Router){ }

  ngOnInit(): void {
   
  }


  // metodo nuevo para actualizar
  actualizarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato =>{
      console.log(dato);
      this.irALaListaDeEmpleado();
    },error =>{ console.log(error); //
 }
  );
}

  irALaListaDeEmpleado(){
    this.router.navigate(['/empleados']);
  }


  onSubmit (){
    this.actualizarEmpleado();
  }

}
