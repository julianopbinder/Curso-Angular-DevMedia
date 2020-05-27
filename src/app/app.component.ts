import { Produto } from './produto';
import { Component } from '@angular/core';
import {ListaProdutosComponent} from './lista-produtos/lista-produtos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produtos: Produto[] = [];
  title = 'loja-devmedia';

  constructor() {
   let p = new Produto();
   p.id = 1;
   p.nome = "Macarrao";
   this.produtos.push(p);

  }

}
