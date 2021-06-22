import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }
    h2{

     margin-top:5px;

    }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencia:boolean = false;


  constructor( private paisService:PaisService){}
  
  buscar(termino:string){

    this.mostrarSugerencia = false; 
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
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
    this.mostrarSugerencia= true;
    this.termino = termino;

    this.paisService.buscarPais(termino)
        .subscribe(
          paises => this.paisesSugeridos = paises.slice(0,5),
        (err)=> this.paisesSugeridos = []);
  }
  
  buscarSugerido(termino:string){

    this.buscar(termino);

  }

}
