import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return new HttpParams().set('fields','name;capital;flag;population;alpha2Code');
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino:string):Observable<Country[]>{

    const url: string = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url, {params: this.httpParams});
  }

  buscarCapital( termino:string):Observable<Country[]>{

    const url: string = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>( url, {params: this.httpParams});
  }
  
  getPaisPorID( id:string):Observable<Country>{

    const url: string = `${this.apiUrl}/alpha/${id}?fields=name;flag;population;numericCode;alpha3Code;translations`;

    return this.http.get<Country>( url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    
    const url: string = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>( url, {params: this.httpParams})
        
  }
}
