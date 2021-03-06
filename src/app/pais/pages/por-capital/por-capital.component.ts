import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
    h2{

      margin-top:5px;

    }
    `
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];

  constructor( private capitalService:PaisService){}
  
  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(termino)
      .subscribe((paises) => { 
        this.paises = paises
        console.log( paises)
      }, (error) =>{
          this.hayError = true
          this.paises = []
      } 
      )
  }

  sugerencias(termino:string){
    this.hayError = false;
    // TODO: CREAR SUGERENCIAS
  }

}



