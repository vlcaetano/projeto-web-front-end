import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../guards/auth-guard.service';

import { JogoCadastrarComponent } from './jogo-cadastrar/jogo-cadastrar.component';
import { JogoDetalhesComponent } from './jogo-detalhes/jogo-detalhes.component';
import { JogoEditarComponent } from './jogo-editar/jogo-editar.component';
import { JogosComponent } from './jogos-listar/jogos.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';

export const jogosRoutes: Routes = [
  {
    path: 'jogos',
    component: JogosComponent
  },
  {
    path: 'jogo-detalhes/:id',
    component: JogoDetalhesComponent
  },
  {
    path: 'jogo-editar/:id',
    component: JogoEditarComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'jogo-cadastrar',
    component: JogoCadastrarComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: 'pesquisar',
    component: PesquisarComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(jogosRoutes)],
  exports: [RouterModule],
})
export class JogosRoutingModule { }
