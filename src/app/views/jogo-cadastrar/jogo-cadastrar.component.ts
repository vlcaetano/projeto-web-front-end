import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-cadastrar',
  templateUrl: './jogo-cadastrar.component.html',
  styleUrls: ['./jogo-cadastrar.component.css']
})
export class JogoCadastrarComponent implements OnInit {

  public jogo: Jogo = {
    id: null,
    nome: '',
    imgRetrato: '',
    imgPaisagem: '',
    destaque: false,
    maisVendido: false,
    novidade: false,
    descricao: ''
  }

  constructor(private route: ActivatedRoute, 
              private jogosService: JogosService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  cadastrar() {
    this.jogosService.cadastrar(this.jogo)
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
