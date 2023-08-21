import { Component, OnInit } from '@angular/core';
import { HerramientaService } from '../herramienta.service';
import { Herramienta } from '../herramienta';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-registro-herramientas',
  templateUrl: './registro-herramientas.component.html',
  styleUrls: ['./registro-herramientas.component.css']
})
export class RegistroHerramientasComponent implements OnInit {

  herramienta : Herramienta = new Herramienta;

  constructor (private herramientaService: HerramientaService,private router:Router){ }

  ngOnInit(): void { }

  guardarHerramienta() {
    this.herramientaService.registrarHerramienta(this.herramienta).pipe(
      tap(dato => {
        console.log("Operacion Exitosa",dato) ;
        this.irALaListaDeHerramientas();
      }),
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        throw error; 
      })
    ).subscribe();
  }

  irALaListaDeHerramientas(){
    this.router.navigate(['/lista-herramientas']);
  }

  onSubmit(){
     //console.log(this.empleado);
     this.guardarHerramienta();

  }

}
