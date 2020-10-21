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

  constructor(private jogosService: JogosService) { 
    this.jogosService.getAll().subscribe((x: Jogo[]) => {
      this.jogos = x
    })
  }

  ngOnInit(): void {
  }

}
