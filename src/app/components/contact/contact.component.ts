import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  nome: String
  mensagem: String
  email: String

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    alert(`Mensagem enviada com successo! Obrigade ${ this.nome }`)
    this.nome = ""
    this.mensagem = ""
    this.email = ""
  }

}
