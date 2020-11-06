import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: string = ''
  senha: string = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logar() {
    this.authService.realizarLogin(this.login, this.senha)
  }
}
