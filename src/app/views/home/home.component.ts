import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup

  constructor(private authService: AuthService, private fb: FormBuilder) { }

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
    )
  }

  get login() { return this.loginForm.get('login') }
  get senha() { return this.loginForm.get('senha') }
}
