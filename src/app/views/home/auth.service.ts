import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false

  constructor(private router: Router, private loginService: LoginService) { }

  realizarLogin(login: string, senha: string) {

    this.loginService.getUsuario(login, senha).subscribe((dado: Usuario[]) => {
      const resposta = dado[0]
      // console.log(resposta)

      if(resposta != undefined) {
        resposta.admin ? this.usuarioAutenticado = true : this.usuarioAutenticado = false
        
        this.router.navigate(['/loja'])
      }
    })

  }

  obterUsuarioAutenticado() {
    return this.usuarioAutenticado
  }
}
