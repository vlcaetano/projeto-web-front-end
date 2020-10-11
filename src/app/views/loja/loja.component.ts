import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {


  destaques = []
  maisVendidos = []
  novidadesPopulares = []

  jogos: Array<Jogo> = []

  constructor(private jogosService: JogosService) {
    this.jogos = jogosService.getAll()

    // const testeDestaque = jogo => jogo.destaque
    const testeMaisVendido = jogo => jogo.maisVendido
    const testeNovidade = jogo => jogo.novidade

    // this.destaques = this.jogos.filter(testeDestaque)
    this.maisVendidos = this.jogos.filter(testeMaisVendido)
    this.novidadesPopulares = this.jogos.filter(testeNovidade)
   }

  ngOnInit(): void {
  }

}
