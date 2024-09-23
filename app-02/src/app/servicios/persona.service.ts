import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../modelos/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  urlApi: string = 'http://localhost:8080/api/v1/personas';
  
  constructor(private http:HttpClient) { }

  
  getPersonas(): Observable<IPersona[]>{
    return this.http.get<IPersona[]>(this.urlApi);
  }
}
