import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Jogo } from 'src/app/models/jogo.model';
import { JogosService } from 'src/app/services/jogos.service';

@Component({
  selector: 'app-jogo-editar',
  templateUrl: './jogo-editar.component.html',
  styleUrls: ['./jogo-editar.component.css']
})
export class JogoEditarComponent implements OnInit {

  public jogo: Jogo

  constructor(private route: ActivatedRoute, 
              private jogosService: JogosService,
              private router: Router) {
    
    const id: number = Number(this.route.snapshot.params.id) // nome do parâmetro igual a como está no app-routing

    this.jogo = this.jogosService.getJogoById(id)
  }

  ngOnInit(): void {
  }

  editar() {
    this.jogosService.editar(this.jogo)
    this.router.navigateByUrl('/admin')
  }

}
