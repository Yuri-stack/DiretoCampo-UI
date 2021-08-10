import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url: string = `${environment.server}/produtos`

  constructor(private http: HttpClient) { }

  getAll():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.url)
  }

  getById(id:number):Observable<Produto>{
    return this.http.get<Produto>(`${this.url}/${id}`)
  }

  post(produto: Produto):Observable<Produto>{
    return this.http.post<Produto>(this.url, produto)
  }

  put(produto: Produto):Observable<Produto>{
    return this.http.put<Produto>(this.url, produto)
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
