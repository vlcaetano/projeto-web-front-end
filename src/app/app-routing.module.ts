import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { LojaComponent } from './views/loja/loja.component';
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
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
