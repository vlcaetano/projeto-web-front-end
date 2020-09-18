import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  herois: any[] = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 5, name:'BatGirl'}
  ]
  teste: string[] = ['teste', 'teste2', 'teste3'] 

  constructor() { }

  ngOnInit(): void {
  }

}
