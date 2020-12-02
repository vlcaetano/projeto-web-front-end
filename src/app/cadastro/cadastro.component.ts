import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioForm: FormGroup
  usuario: Usuario

  submitted: boolean = false

  constructor(private loginService: LoginService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: [null],
      nomeCompleto: ['', Validators.required],
      nomeUsuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      jogosComprados: [[]],
      admin: [false]
    })
  }

  onSubmit() {
    this.submitted = true;

    if(this.usuarioForm.invalid) {
      return
    }

    this.usuario = this.usuarioForm.value
    this.loginService.cadastrar(this.usuario)
      .subscribe(() => this.router.navigateByUrl('/loja'))
  }

  get nomeCompleto() { return this.usuarioForm.get('nomeCompleto') }
  get nomeUsuario() { return this.usuarioForm.get('nomeUsuario') }
  get email() { return this.usuarioForm.get('email') }
  get senha() { return this.usuarioForm.get('senha') }
}
