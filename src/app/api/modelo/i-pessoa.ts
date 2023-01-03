import { IEndereco } from "./i-endereco";

export interface IPessoa {
    cpf?: string
    nome?: string
    dataNascimento?: Date
    endereco?: IEndereco;
}