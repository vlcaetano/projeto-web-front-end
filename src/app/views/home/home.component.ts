import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup
  usuario: Usuario
  submitted: boolean = false

  constructor(private authService: AuthService,
    private loginService: LoginService,
    private fb: FormBuilder) {

    this.usuario = this.loginService.getUsuarioLogado()
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  logar() {
    this.authService.realizarLogin(
      this.loginForm.controls['login'].value,
      this.loginForm.controls['senha'].value
    ).then(() => {
      this.usuario = this.loginService.getUsuarioLogado()
      this.submitted = true
    })
  }

  logout() {
    this.usuario = undefined
    this.loginService.setUsuarioLogado(undefined)
    this.authService.setUsuarioAutenticado(false)
  }

  get login() { return this.loginForm.get('login') }
  get senha() { return this.loginForm.get('senha') }
}
