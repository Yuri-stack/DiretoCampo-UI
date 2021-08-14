import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos: Produto[] = []
  produto: Produto

  constructor(private produtoService: ProdutoService) { } 

  ngOnInit(): void {
    this.getAllProduto()
  }

  getAllProduto(){
    this.produtoService.getAll().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }
}
