import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [` 
  
  td{
    padding: 5px;
    
    }
  `
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises:Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
