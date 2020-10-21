import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-detalhes',
  templateUrl: './jogo-detalhes.component.html',
  styleUrls: ['./jogo-detalhes.component.css']
})
export class JogoDetalhesComponent implements OnInit {

  public jogo: Jogo = {
    id: null,
    nome: '',
    imgRetrato: '',
    imgPaisagem: '',
    descricao: '',
    destaque: null,
    maisVendido: null,
    novidade: null,
  }

  constructor(private route: ActivatedRoute, private jogosService: JogosService) {
    
    const id: number = Number(this.route.snapshot.params.id)

    this.jogosService.getJogoById(id)
      .subscribe((jogo: Jogo) => this.jogo = jogo)
  }

  ngOnInit(): void {
  }
}
