import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-put-user',
  templateUrl: './put-user.component.html',
  styleUrls: ['./put-user.component.css']
})
export class PutUserComponent implements OnInit {

  userId = environment.userId
  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserById()
    this.usuario.id = this.userId
    if (environment.token == false) {
      alert("Você precisa estar logado para acessar essa parte")
      this.router.navigate(['/login'])
    }
  }
 
  getUserById(){
    this.usuarioService.getByUserId(this.userId).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  update(){
    this.usuarioService.atualizar(this.usuario).subscribe((resp: Usuario) => {
      this.router.navigate(['/account'])
    }) 
  }

  delete(){
    let resp = confirm('Tem certeza que deseja apagar?')
    if(resp == true){
      this.usuarioService.delete(this.userId).subscribe(() => {
        // this.alerts.showAlertSuccess('Post deleted successfully')
        alert("Usuário Apagado com Sucesso")
        this.router.navigate(['/login'])
      })
    } 
  }

}
