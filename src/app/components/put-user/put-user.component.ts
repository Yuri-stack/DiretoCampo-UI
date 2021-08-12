import { Component, OnInit } from '@angular/core';
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

  constructor(private serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.getUserById()
    this.usuario.id = this.userId
  }

  getUserById(){
    this.serviceUsuario.getByUserId(this.userId).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
