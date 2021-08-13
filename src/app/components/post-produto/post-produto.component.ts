import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { Usuario } from 'src/app/models/Usuario';
import { ProdutoService } from 'src/app/services/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  usuario: Usuario = new Usuario()
  userId = environment.userId

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  cadastrar(){
    this.usuario.id = this.userId
    this.produto.usuario = this.usuario

    this.produtoService.post(this.produto).subscribe((resp: Produto) => {
      this.router.navigate(['/myProducts'])
    })
  }
}
