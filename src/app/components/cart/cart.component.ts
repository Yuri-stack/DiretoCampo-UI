import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/Compra';
import { Produto } from 'src/app/models/Produto';
import { Usuario } from 'src/app/models/Usuario';
import { CompraService } from 'src/app/services/compra.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  produto: Produto = new Produto()
  compra: Compra = new Compra()
  usuario: Usuario = new Usuario()
  userId = environment.userId

  precoTotal: 5 //variavel ficticia q temos que mudar conforme o front
  quantidade: 5 //variavel ficticia q temos que mudar conforme o front

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compraService: CompraService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"]
    this.findById(id)
  }

  findById(id: number){
    this.produtoService.getById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  comprar(){
    this.compra.usuario.id = this.userId
    this.compra.produto.id = this.produto.id
    this.compra.precoTotal = this.precoTotal
    this.compra.quantidade = this.quantidade
    this.compra.status = true

    this.compraService.post(this.compra).subscribe((resp: Compra) => {
      this.router.navigate(['/confirm'])
    })
  }
}
