import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
