import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.css']
})
export class MenuLoggedComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login'])

    this.usuarioService.isLogouted()
    environment.token = false 
    environment.userId = 0
  }

  // logout(){
  //   this.router.navigate(['/entrar'])
  //   environment.token = ''
  //   environment.nome = ''
  //   environment.foto = ''
  //   environment.id = 0
  // }

}
