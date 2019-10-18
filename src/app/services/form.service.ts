import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IForm } from '../interfaces/form-interface';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  private _url: string = 'https://restcountries.eu/rest/v2/all';

  constructor( private http: HttpClient ) {}
  // +++ función que retorna la informacion de la API +++ //
   getData(): Observable<IForm[]> {
    return this.http.get<IForm[]>( this._url );
  }
}
