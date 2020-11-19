import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-editar',
  templateUrl: './jogo-editar.component.html',
  styleUrls: ['./jogo-editar.component.css']
})
export class JogoEditarComponent implements OnInit {

  jogoForm: FormGroup
  jogo: Jogo

  submitted: boolean = false;

  private id: number

  constructor(private route: ActivatedRoute, 
              private jogosService: JogosService,
              private router: Router,
              private fb: FormBuilder) {
    
    this.id = Number(this.route.snapshot.params.id) // nome do parâmetro igual a como está no app-routing

    this.jogosService.getJogoById(this.id)
      .subscribe((jogo: Jogo) => {
        this.jogoForm.setValue({
          id: jogo.id,
          nome: jogo.nome,
          imgRetrato: jogo.imgRetrato,
          imgPaisagem: jogo.imgPaisagem,
          destaque: jogo.destaque,
          maisVendido: jogo.maisVendido,
          novidade: jogo.novidade,
          descricao: jogo.descricao, 
        })
      })
  }

  ngOnInit(): void {
    this.jogoForm = this.fb.group({
      id: [null],
      nome: ['', Validators.required],
      imgRetrato: ['', Validators.required],
      imgPaisagem: ['', Validators.required],
      destaque: [false],
      maisVendido: [false],
      novidade: [false],
      descricao: ['', [Validators.required, Validators.minLength(50)]]
    })
  }

  editar() {
    this.submitted = true;

    if(this.jogoForm.invalid) {
      return
    }

    this.jogo = this.jogoForm.value

    this.jogosService.editar(this.jogo, this.id)
      .subscribe(() => this.router.navigateByUrl('/admin'))
  }

  get nome() { return this.jogoForm.get('nome') }
  get imgRetrato() { return this.jogoForm.get('imgRetrato') }
  get imgPaisagem() { return this.jogoForm.get('imgPaisagem') }
  get descricao() { return this.jogoForm.get('descricao') }
}
