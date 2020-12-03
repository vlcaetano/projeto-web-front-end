import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Jogo } from '../models/jogo.model';



@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private url: string = 'http://localhost:3000/jogos'

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  getAll(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getJogoById(id: number): Observable<Jogo> {
    return this.http.get<Jogo>(`${this.url}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getJogosById(ids: number[]): Observable<Jogo>[] {
    let jogos: Observable<Jogo>[] = []
    for (let jogoId of ids) {
      jogos.push(this.http.get<Jogo>(`${this.url}/${jogoId}`))
    }
    return jogos
  }

  deletar(id: number) {
    return this.http.delete<Jogo>(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  cadastrar(jogo: Jogo): Observable<Jogo> {
    return this.http.post<Jogo>(this.url, jogo)
      .pipe(
        catchError(this.handleError)
      )
  }

  editar(jogo: Jogo, id: number): Observable<Jogo> {
    return this.http.put<Jogo>(`${this.url}/${id}`, jogo)
      .pipe(
        catchError(this.handleError)
      )
  }

  getJogosPorPagina(numPagina: number) : Observable<HttpResponse<Jogo[]>> {
    return this.http.get<Jogo[]>(`${this.url}?_sort=nome&_page=${numPagina}&_limit=8`, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }
}
