import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    private router: Router,
    private serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
  }

  logar(){                      
    environment.token = true
    
    this.serviceUsuario.getByUserEmail(this.usuario.email).subscribe((resp: Usuario)=>{
      this.usuario = resp
      environment.userId = this.usuario.id

      this.logado()

      this.router.navigate(['/account'])
    }, erro => {
      alert("Usuário ou senha incorretos")
    })
  }

  logado(){
    let logged = true                           
    environment.token = true 
    return logged       
  }
}
