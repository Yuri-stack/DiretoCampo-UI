import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-confirm-sales',
  templateUrl: './confirm-sales.component.html',
  styleUrls: ['./confirm-sales.component.css']
})
export class ConfirmSalesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(environment.token == false){
      alert("Você precisa estar logado para acessar essa parte")
      this.router.navigate(['/login'])
    }
  }

}
