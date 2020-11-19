import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';
import { PesquisarComponent } from '../pesquisar/pesquisar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router, private loginService: LoginService) { }

  realizarLogin(nomeUsuario: string, senha: string) {

    this.loginService.getUsuario(nomeUsuario, senha).subscribe((dado: Usuario[]) => {
      const resposta = dado[0]

      if(resposta != undefined) {
        resposta.admin ? this.usuarioAutenticado = true : this.usuarioAutenticado = false
        
        this.loginService.setUsuarioLogado(resposta)

        this.router.navigate(['/loja'])
      } else {
        this.loginService.setUsuarioLogado(undefined)
      }
    })

  }

  obterUsuarioAutenticado() {
    return this.usuarioAutenticado
  }
}
