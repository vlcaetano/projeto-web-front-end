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

  jogos: Array<Jogo> = []

  public jogo

  constructor(private route: ActivatedRoute, private jogosService: JogosService) {
    this.jogos = jogosService.getAll()
    
    const id: number = Number(this.route.snapshot.params.id) // nome do parâmetro igual a como está no app-routing

    this.jogo = this.getJogo(id)
  }

  ngOnInit(): void {
  }

  getJogo(id: number) {
    for (let obj of this.jogos) {
      if(obj.id == id){
        return obj
      }
    }
    return null
  }
}
