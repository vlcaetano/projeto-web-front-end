import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {


  destaques = []
  maisVendidos = []
  novidadesPopulares = []

  teste = [
    {
      id: 1,
      nome: 'Borderlands 3',
      imgRetrato: 'assets/img/retrato/borderlands3.png',
      imgPaisagem: 'assets/img/paisagem/borderlands3.png',
      destaque: true,
      maisVendido: false,
      novidade: false
    },
    {
      id: 2,
      nome: 'Marvel\'s Avengers',
      imgRetrato: 'assets/img/retrato/avengers.png',
      imgPaisagem: 'assets/img/paisagem/avengers.png',
      destaque: false,
      maisVendido: true,
      novidade: false
    },
    {
      id: 3,
      nome: 'Call of Duty: Black Ops Cold War',
      imgRetrato: 'assets/img/retrato/cod.png',
      imgPaisagem: 'assets/img/paisagem/cod.png',
      destaque: false,
      maisVendido: true,
      novidade: false
    },
    {
      id: 4,
      nome: 'Samurai Jack: Battle Through Time',
      imgRetrato: 'assets/img/retrato/samurai.png',
      imgPaisagem: 'assets/img/paisagem/samurai.png',
      destaque: false,
      maisVendido: true,
      novidade: false
    },
    {
      id: 5,
      nome: 'Monster Hunter World: Iceborne',
      imgRetrato: 'assets/img/retrato/monster.png',
      imgPaisagem: 'assets/img/paisagem/monster.png',
      destaque: false,
      maisVendido: true,
      novidade: false
    },
    {
      id: 6,
      nome: 'Poly Bridge',
      imgRetrato: 'assets/img/retrato/polybridge.png',
      imgPaisagem: 'assets/img/paisagem/polybridge.png',
      destaque: false,
      maisVendido: false,
      novidade: false
    },
    {
      id: 7,
      nome: 'Fall Guys',
      imgRetrato: 'assets/img/retrato/fallguys.png',
      imgPaisagem: 'assets/img/paisagem/fallguys.png',
      destaque: false,
      maisVendido: false,
      novidade: true
    },
    {
      id: 8,
      nome: 'JR Adventures',
      imgRetrato: 'assets/img/retrato/jr-adventures.png',
      imgPaisagem: 'assets/img/paisagem/jr-adventures.png',
      destaque: false,
      maisVendido: false,
      novidade: true
    },
    {
      id: 9,
      nome: 'Under World',
      imgRetrato: 'assets/img/retrato/underworld.png',
      imgPaisagem: 'assets/img/paisagem/underworld.png',
      destaque: false,
      maisVendido: false,
      novidade: true
    }
  ]

  jogos: any[] = [
    {
      imagem: 'assets/img/avengers.png',
      nome: 'Marvel\'s Avengers'
    },
    {
      imagem: 'assets/img/cod.png',
      nome: 'Call of Duty: Black Ops Cold War'
    },
    {
      imagem: 'assets/img/samurai.png',
      nome: 'Samurai Jack: Battle Through Time'
    },
    {
      imagem: 'assets/img/monster.png',
      nome: 'Monster Hunter World: Iceborne'
    }
  ]

  novidades: any[] = [
    {
      imagem: 'assets/img/jr-adventures.png',
      nome: 'JR Adventures'
    },
    {
      imagem: 'assets/img/underworld.png',
      nome: 'Under World'
    },
    {
      imagem: 'assets/img/fallguys.png',
      nome: 'Fall Guys'
    }
  ]

  constructor() {
    const testeDestaque = jogo => jogo.destaque
    const testeMaisVendido = jogo => jogo.maisVendido
    const testeNovidade = jogo => jogo.novidade

    this.destaques = this.teste.filter(testeDestaque)
    this.maisVendidos = this.teste.filter(testeMaisVendido)
    this.novidadesPopulares = this.teste.filter(testeNovidade)
    // console.log(this.maisVendidos)
   }

  ngOnInit(): void {
  }

}
