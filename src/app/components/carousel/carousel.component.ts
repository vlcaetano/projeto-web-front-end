import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  jogos: Array<Jogo> = []
  destaques: Array<Jogo> = []

  constructor(private jogosService: JogosService) { 

    this.jogos = this.jogosService.getAll()

    this.destaques = this.jogos.filter(jogo => jogo.destaque)
  }

  ngOnInit(): void {
  }

}
