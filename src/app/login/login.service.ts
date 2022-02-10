import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAutenticado } from '../shared/models/UsuarioAutenticado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  actualUser: UsuarioAutenticado = new UsuarioAutenticado();

  constructor(private http: HttpClient) {}

  login(username: string, pass: string): Observable<UsuarioAutenticado> {
    let params: HttpParams = new HttpParams();
    params = params.appendAll({ login: username, senha: pass });

    return this.http.post<UsuarioAutenticado>(
      `${environment.serverUrl}/usuario/autenticar`,
      {},
      { params: params }
    );
  }
}
