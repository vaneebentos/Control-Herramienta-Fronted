import { Component, OnInit } from '@angular/core';
import { Herramienta } from '../herramienta';
import { ActivatedRoute } from '@angular/router';
import { HerramientaService } from '../herramienta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-herramienta-detalles',
  templateUrl: './herramienta-detalles.component.html',
  styleUrls: ['./herramienta-detalles.component.css']
})
export class HerramientaDetallesComponent  implements OnInit{


  id:number;
  herramienta: Herramienta;

  constructor(private route:ActivatedRoute,private herramientaServico:HerramientaService){

  }
  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.herramienta= new Herramienta();
    this.herramientaServico.obtenerHerramientaPorId(this.id).subscribe(dato =>{
      this.herramienta= dato;
      swal(`Detalle de la herramienta ${this.herramienta.nombreHerramienta}`);
    });
  }

}


