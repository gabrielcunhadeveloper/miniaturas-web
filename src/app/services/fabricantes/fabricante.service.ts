import { environment } from './../../../environments/environment';
import { Fabricante } from './../../models/fabricante.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap, take, delay } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private readonly API = `${environment.API}fabricantes`;

  constructor(private http: HttpClient) { }

  listar () : Observable<Fabricante[]>{
    
    return this.http.get<Fabricante[]>(`${this.API}`)
          .pipe(
            // delay(2),
            tap(f => console.log(f))
          );
  }

  criar (fabricante: Fabricante): Observable<Fabricante> {
    return this.http.post<Fabricante>(this.API, fabricante)
          .pipe(
            tap(f => console.log(f))
          );
  }

  remnover(id: number) : Observable<{}> {
    const url = `${this.API}/${id}`; 
    return this.http.delete(url, httpOptions)
        .pipe(
          tap(f => console.log(f))
        );
  }

}
