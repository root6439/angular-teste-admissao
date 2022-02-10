import { environment } from './../../environments/environment';
import { Pais } from './../shared/models/Pais';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  mainUrl: string = 'pais';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Pais[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));

    return this.http.get<Pais[]>(
      `${environment.serverUrl}/${this.mainUrl}/listar`,
      { params: params }
    );
  }

  postCountry(country: Pais): Observable<Pais> {
    country.id = 0;

    let params: HttpParams = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));

    return this.http.post<Pais>(
      `${environment.serverUrl}/${this.mainUrl}/salvar`,
      {
        country,
      },
      { params: params }
    );
  }

  deleteCountry(id: number): Observable<Pais> {
    let params: HttpParams = new HttpParams();
    params = params.append('token', localStorage.getItem('token'));
    params = params.append('id', id);

    return this.http.get<Pais>(
      `${environment.serverUrl}/${this.mainUrl}/excluir`,
      {
        params: params,
      }
    );
  }
}
