import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-cadastrar',
  templateUrl: './jogo-cadastrar.component.html',
  styleUrls: ['./jogo-cadastrar.component.css']
})
export class JogoCadastrarComponent implements OnInit {

  jogoForm: FormGroup
  jogo: Jogo

  submitted: boolean = false;
  
  constructor(private jogosService: JogosService,
              private router: Router,
              private fb: FormBuilder) {
      
    }
    
    ngOnInit(): void {
      this.jogoForm = this.fb.group({
        id: [null],
        nome: ['', Validators.required],
        preco: [null, Validators.required],
        imgRetrato: ['', Validators.required],
        imgPaisagem: ['', Validators.required],
        destaque: [false],
        maisVendido: [false],
        novidade: [false],
        descricao: ['', [Validators.required, Validators.minLength(50)]]
      })
    }

  onSubmit() {
    this.submitted = true;

    if(this.jogoForm.invalid) {
      return
    }

    this.jogo = this.jogoForm.value
    this.jogosService.cadastrar(this.jogo)
      .subscribe(() => this.router.navigateByUrl('/admin'))
  }

  get nome() { return this.jogoForm.get('nome') }
  get preco() { return this.jogoForm.get('preco') }
  get imgRetrato() { return this.jogoForm.get('imgRetrato') }
  get imgPaisagem() { return this.jogoForm.get('imgPaisagem') }
  get descricao() { return this.jogoForm.get('descricao') }
}
