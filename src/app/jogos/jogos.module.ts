import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JogoDetalhesComponent } from './jogo-detalhes/jogo-detalhes.component';
import { JogoCadastrarComponent } from './jogo-cadastrar/jogo-cadastrar.component';
import { JogoEditarComponent } from './jogo-editar/jogo-editar.component';
import { JogosComponent } from './jogos-listar/jogos.component';
import { JogosRoutingModule } from './jogos-routing.module';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JogosRoutingModule
  ],
  exports: [],
  declarations: [
    JogoDetalhesComponent,
    JogoCadastrarComponent,
    JogoEditarComponent,
    JogosComponent,
    BibliotecaComponent,
    PesquisarComponent
  ],
  providers: [],
})

export class JogosModule { }