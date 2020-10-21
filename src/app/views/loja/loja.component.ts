import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  maisVendidos = []
  novidadesPopulares = []

  constructor(private jogosService: JogosService) {
    this.jogosService.getAll()
      .subscribe((jogos: Jogo[]) => {
        this.maisVendidos = jogos.filter(jogo => jogo.maisVendido)
        this.novidadesPopulares = jogos.filter(jogo => jogo.novidade)
      })
  }

  ngOnInit(): void {
  }

}
