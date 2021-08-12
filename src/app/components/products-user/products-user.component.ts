import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({ 
  selector: 'app-products-user',
  templateUrl: './products-user.component.html',
  styleUrls: ['./products-user.component.css']
})
export class ProductsUserComponent implements OnInit {

  userId = environment.userId
  usuario: Usuario = new Usuario()
  listaProduto: Produto[] = [] 

  constructor(private serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
   this.getUserById()
  }

  getUserById(){
    this.serviceUsuario.getByUserId(this.userId).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.listaProduto = this.usuario.produto
    })
  }
}
