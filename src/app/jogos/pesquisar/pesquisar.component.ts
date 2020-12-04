import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  jogos: Jogo[] = []
  nomeQuery = new FormControl()
  
  resultados: Observable<Jogo[]>

  constructor(private jogosService: JogosService) { 
    this.nomeQuery.value
  }

  ngOnInit(): void {
    this.resultados = this.nomeQuery.valueChanges.pipe(
      map( nome => nome.trim() ),
      // filter( nome => nome.length > 1 ),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap( nome => this.jogosService.getJogosPorNome(nome) ),
      map( (resposta: Jogo[]) => this.jogos = resposta ),
      tap(() => this.nomeQuery.markAsTouched()),
    )
  }
}
