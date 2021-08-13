import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { Usuario } from 'src/app/models/Usuario';
import { ProdutoService } from 'src/app/services/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-put-produto',
  templateUrl: './put-produto.component.html',
  styleUrls: ['./put-produto.component.css']
})
export class PutProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  userId = environment.userId

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit(): void { 
    let id: number = this.route.snapshot.params["id"]
    this.findById(id)
  }

  findById(id: number){
    this.produtoService.getById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  update(){
    let usuario: Usuario = new Usuario

    usuario.id = this.userId
    this.produto.usuario = usuario

    this.produtoService.put(this.produto).subscribe((resp: Produto)=>{
      this.router.navigate(['/myProducts'])
    })
  }

  delete(){
    let resp = confirm('Tem certeza que deseja apagar?')

    if(resp == true){
      this.produtoService.delete(this.produto.id).subscribe(() => {
        // this.alerts.showAlertSuccess('Post deleted successfully')
        alert("Produto Apagado com Sucesso")
        this.router.navigate(['/myProducts'])
      })
    }
  }

}
