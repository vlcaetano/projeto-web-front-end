import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { JogoCadastrarComponent } from './views/jogo-cadastrar/jogo-cadastrar.component';
import { JogoDetalhesComponent } from './views/jogo-detalhes/jogo-detalhes.component';
import { JogoEditarComponent } from './views/jogo-editar/jogo-editar.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LojaComponent } from './views/loja/loja.component';
import { PainelComponent } from './views/painel/painel.component';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'loja',
    component: LojaComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: 'jogos',
    component: JogosComponent
  },
  {
    path: 'pesquisar',
    component: PesquisarComponent
  },
  {
    path: 'admin',
    component: PainelComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'jogo-detalhes/:id',
    component: JogoDetalhesComponent
  },
  {
    path: 'jogo-editar/:id',
    component: JogoEditarComponent
  },
  {
    path: 'jogo-cadastrar',
    component: JogoCadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
