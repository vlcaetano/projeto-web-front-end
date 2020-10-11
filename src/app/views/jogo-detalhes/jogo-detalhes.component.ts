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

  public jogo: Jogo

  constructor(private route: ActivatedRoute, private jogosService: JogosService) {
    
    const id: number = Number(this.route.snapshot.params.id)

    this.jogo = this.jogosService.getJogoById(id)
  }

  ngOnInit(): void {
  }
}
