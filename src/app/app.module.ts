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

import { JogosModule } from './jogos/jogos.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

import { LojaComponent } from './loja/loja.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PainelComponent } from './painel/painel.component';
import { CarouselComponent } from './components/carousel/carousel.component';

registerLocaleData(localePtBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LojaComponent,
    CadastroComponent,
    PainelComponent,
    CarouselComponent,
  ],
  imports: [
    CarouselModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    JogosModule,
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
