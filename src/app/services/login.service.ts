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
  private usuarioLogado: Usuario

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

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.tratarErro)
      )
  }

  getUsuario(nomeUsuario: string, senha: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}?nomeUsuario=${nomeUsuario}&senha=${senha}`)
      .pipe(
        retry(2),
        catchError(this.tratarErro)
      )
  }

  deletar(id: number) {
    return this.http.delete<Usuario>(`${this.url}/${id}`)
      .pipe(
        catchError(this.tratarErro)
      )
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
      .pipe(
        catchError(this.tratarErro)
      )
  }

  editar(usuario: Usuario, id: number): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${id}`, usuario)
      .pipe(
        catchError(this.tratarErro)
      )
  }

  getUsuarioLogado(): Usuario {
    return this.usuarioLogado
  }

  setUsuarioLogado(usuario: Usuario) {
    this.usuarioLogado = usuario
  }
}
