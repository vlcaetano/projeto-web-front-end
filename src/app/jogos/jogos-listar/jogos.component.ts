import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';

import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  jogos: Array<Jogo> = []

  paginas: number[] = []
  pagAtual: number = 1

  constructor(private jogosService: JogosService) { 
    this.jogosService.getJogosPorPagina(1).subscribe((jogos) => {
      this.jogos = jogos.body

      let numDePaginas = Math.ceil( Number(jogos.headers.get('X-Total-Count')) / 8 )

      for (let i = 1; i <= numDePaginas; i++) {
        this.paginas.push(i) 
      }
    })
  }

  ngOnInit(): void {
  }

  mudarPagina(pag: number) {
    this.jogosService.getJogosPorPagina(pag).subscribe((jogos) => {
      this.jogos = jogos.body
    })
    this.pagAtual = pag
  }
}
