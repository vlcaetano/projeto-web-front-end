import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-editar',
  templateUrl: './jogo-editar.component.html',
  styleUrls: ['./jogo-editar.component.css']
})
export class JogoEditarComponent implements OnInit {

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

  private id: number

  constructor(private route: ActivatedRoute, 
              private jogosService: JogosService,
              private router: Router) {
    
    this.id = Number(this.route.snapshot.params.id) // nome do parâmetro igual a como está no app-routing

    this.jogosService.getJogoById(this.id)
      .subscribe((jogo: Jogo) => this.jogo = jogo)
  }

  ngOnInit(): void {
  }

  editar() {
    this.jogosService.editar(this.jogo, this.id)
      .subscribe(() => this.router.navigateByUrl('/admin'))
  }

  trocarDestaque() {
    this.jogo.destaque = !this.jogo.destaque
  }

  trocarMaisVendido() {
    this.jogo.maisVendido = !this.jogo.maisVendido
  }

  trocarNovidade() {
    this.jogo.novidade = !this.jogo.novidade
  }
}
