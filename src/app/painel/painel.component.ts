import { Component, OnInit } from '@angular/core';

import { Jogo } from 'src/app/models/jogo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { JogosService } from 'src/app/services/jogos.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  jogos: Jogo[] = []
  usuarios: Usuario[] = []

  constructor(private jogosService: JogosService, private loginService: LoginService) { 
    this.atualizarDados()
  }

  ngOnInit(): void {
  }

  deletarJogo(id: number) {
    this.jogosService.deletar(id)
      .subscribe(() => this.atualizarDados())
  }

  deletarUsuario(id: number) {
    this.loginService.deletar(id)
      .subscribe(() => this.atualizarDados())
  }

  atualizarDados() {
    this.jogosService.getAll().subscribe((jogos: Jogo[]) => this.jogos = jogos)
    this.loginService.getAll().subscribe((usuarios: Usuario[]) => this.usuarios = usuarios)
  }
}
