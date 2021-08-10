import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public cep: string
    public tipo: string
    public imagem: string
    public produto: Produto[]
    // public compra: Compra[]
}