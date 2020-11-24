import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BibliotecaComponent } from './views/biblioteca/biblioteca.component';
import { LojaComponent } from './views/loja/loja.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { JogoDetalhesComponent } from './views/jogo-detalhes/jogo-detalhes.component';
import { PainelComponent } from './views/painel/painel.component';
import { JogoEditarComponent } from './views/jogo-editar/jogo-editar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JogoCadastrarComponent } from './views/jogo-cadastrar/jogo-cadastrar.component';

registerLocaleData(localePtBr, 'pt-BR');

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
    JogoDetalhesComponent,
    PainelComponent,
    JogoEditarComponent,
    CarouselComponent,
    JogoCadastrarComponent
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
