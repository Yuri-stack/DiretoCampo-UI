import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

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
