import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { LojaComponent } from './views/loja/loja.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { JogoDetalhesComponent } from './views/jogo-detalhes/jogo-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BibliotecaComponent,
    LojaComponent,
    JogosComponent,
    PesquisarComponent,
    CadastroComponent,
    JogoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
