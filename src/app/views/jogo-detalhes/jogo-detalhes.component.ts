import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Jogo } from 'src/app/models/jogo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { JogosService } from 'src/app/services/jogos.service';
import { LoginService } from 'src/app/services/login.service';

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

  usuario: Usuario
  jogoComprado: boolean = false

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jogosService: JogosService,
              private loginService: LoginService) {
    
    const id: number = Number(this.route.snapshot.params.id)
    
    this.usuario = this.loginService.getUsuarioLogado()
    
    this.jogosService.getJogoById(id)
      .subscribe((jogo: Jogo) => {

        this.jogo = jogo

        if (this.usuario.jogosComprados.includes(this.jogo.id)) {
          this.jogoComprado = true
        }
      })

  }

  ngOnInit(): void {
  }

  comprar() {
    this.usuario.jogosComprados.push(this.jogo.id)

    this.loginService.editar(this.usuario, this.usuario.id)
      .subscribe(() => this.router.navigateByUrl('/biblioteca'))
  }
}
