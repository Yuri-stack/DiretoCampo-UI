import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  url: string = `${environment.server}/produtos`

  constructor(private http: HttpClient) { }

  post(compra: Compra): Observable<Compra>{
    return this.http.post<Compra>(this.url, compra)
  }
}
