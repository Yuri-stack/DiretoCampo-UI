import { Produto } from "./Produto"
import { Usuario } from "./Usuario"

export class Compra{
    public id: number
    public usuario: Usuario
    public produto: Produto
    public precoTotal: number
    public dataCompra: Date
    public quantidade: number
    public status: boolean
}