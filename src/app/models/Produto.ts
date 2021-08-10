import { Usuario } from "./Usuario"

export class Produto {
    public id: number
    public nome: string
    public descricao: string
    public categoria: string
    public preco: number
    public quantidade: number
    public imagem: string
    public data: Date
    public usuario: Usuario
}