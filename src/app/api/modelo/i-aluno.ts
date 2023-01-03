import { IPessoa } from "./i-pessoa";

export interface IAluno extends IPessoa {
    numeroMatricula?: string;
}