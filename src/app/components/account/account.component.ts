import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userId = environment.userId
  usuario: Usuario = new Usuario()

  constructor(
    private serviceUsuario: UsuarioService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserById()
    if(environment.token == false){
      alert("Você precisa estar logado para acessar essa parte")
      this.router.navigate(['/login'])
    }
  }

  getUserById(){
    this.serviceUsuario.getByUserId(this.userId).subscribe((resp: Usuario) => {
      this.usuario = resp
      // console.log(this.usuario)
    })
  }

}
