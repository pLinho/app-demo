import { IPessoa } from "./i-pessoa";

export interface IProfessor extends IPessoa {
    especialidade: string;
    conhecimentos: string[];
}