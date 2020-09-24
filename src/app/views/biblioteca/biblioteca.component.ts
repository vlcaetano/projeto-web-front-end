import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  jogos: any[] = [
    {
      id: 2,
      imagem: 'assets/img/retrato/avengers.png',
      nome: 'Marvel\'s Avengers'
    },
    {
      id: 3,
      imagem: 'assets/img/retrato/cod.png',
      nome: 'Call of Duty: Black Ops Cold War'
    },
    {
      id: 4,
      imagem: 'assets/img/retrato/samurai.png',
      nome: 'Samurai Jack: Battle Through Time'
    },
    {
      id: 5,
      imagem: 'assets/img/retrato/monster.png',
      nome: 'Monster Hunter World: Iceborne'
    },
    {
      id: 6,
      imagem: 'assets/img/retrato/polybridge.png',
      nome: 'Poly Bridge'
    }
  ]

  qtdJogos: number = this.jogos.length

  constructor() { }

  ngOnInit(): void {
  }

}
