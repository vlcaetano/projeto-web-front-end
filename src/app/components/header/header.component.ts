import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario
  isAdmin: boolean = true

  constructor(private loginService: LoginService) {
    // this.usuario = this.loginService.getUsuarioLogado()

    // if(this.usuario) {
    //   this.isAdmin = this.usuario.admin
    // } else {
    //   this.isAdmin = false
    // }

   }

  ngOnInit(): void {
  }



}
