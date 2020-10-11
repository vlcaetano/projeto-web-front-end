import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  jogos: Array<Jogo> = []

  constructor(private jogosService: JogosService) { 
    this.jogos = this.jogosService.getAll()
  }

  ngOnInit(): void {
  }

  deletar(id: number) {
    this.jogosService.deletar(id)
  }
}
