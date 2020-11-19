import { Component, OnInit } from '@angular/core';

import { Jogo } from 'src/app/models/jogo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { JogosService } from 'src/app/services/jogos.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  usuarioLogado: Usuario

  jogos: Jogo[] = []

  qtdJogos: number = 0

  constructor(private loginService: LoginService, 
              private jogosService: JogosService) {

    this.usuarioLogado = this.loginService.getUsuarioLogado()

    if (this.usuarioLogado) {
      
      this.jogosService.getJogosById(this.usuarioLogado.jogosComprados)
        .forEach((obsJogo) => {
          obsJogo.subscribe((jogo) => {
            this.jogos.push(jogo)
            this.qtdJogos++
          })
        })
    }
  }

  ngOnInit(): void {
  }

}
