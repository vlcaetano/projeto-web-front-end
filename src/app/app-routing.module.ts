import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LojaComponent } from './loja/loja.component';
import { PainelComponent } from './painel/painel.component';

import { AuthGuardService } from './guards/auth-guard.service';

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
    path: 'admin',
    component: PainelComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
