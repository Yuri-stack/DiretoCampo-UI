import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../models/Produto';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = `${environment.server}/usuarios`

  constructor(private http: HttpClient) { }

  getByUserId(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/${id}`)
  }

  getByUserEmail(email: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/email/${email}`)
  }

  registrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}`, usuario)
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}`, usuario)
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

  isLogged(){
    let logged = false                            // let ok = false
    if(environment.token != false) logged = true    // let ok = true
    return logged                                   // return ok
  }

  isLogouted(){
    let logged = true
    if(environment.token != true) logged = false
    return logged     
  }
} 
