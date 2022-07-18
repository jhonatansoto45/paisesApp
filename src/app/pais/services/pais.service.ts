import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return  new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flag,population,translations'
    );
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${termino}`;
    //! Atrapa el error .pipe(catchError((err) => of([]))); y retorna un valor vacio
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url,{params: this.httpParams});
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/regionalbloc/${region}?fields`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
