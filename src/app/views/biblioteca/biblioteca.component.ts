import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

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
    },
    {
      imagem: 'assets/img/polybridge.png',
      nome: 'Poly Bridge'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
