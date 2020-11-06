import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  private tratarErro(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Backend retornou código ${error.status}, ` +
        `corpo do erro: ${error.error}`);
    }
    return throwError('Algo errado aconteceu; tente novamente mais tarde.');
  }

  getUsuario(login: string, senha: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}?login=${login}&senha=${senha}`)
      .pipe(
        retry(2),
        catchError(this.tratarErro)
      )
  }

}
