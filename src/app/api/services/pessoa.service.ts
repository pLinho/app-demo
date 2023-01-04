import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IAluno } from "../modelo/i-aluno";
import { IPessoa } from "../modelo/i-pessoa";
import { IProfessor } from "../modelo/i-professor";

@Injectable()
export class ApiPessoaService {
    private API = "http://10.250.250.108:8084/estagiario/api/pessoa/"
    // private API = "http://localhost:8080/api/api/pessoa/"
    constructor(private readonly http: HttpClient) { }
    obterLista() {
        return this.http.get<IPessoa[]>(this.API + 'obterLista')
            .pipe(map<any[], (IPessoa | IAluno | IProfessor)[] | undefined>(v =>
                !!v ? v.map(o => ((o.numeroMatricula !== undefined ? {
                    cpf: o.cpf,
                    nome: o.nome,
                    dataNascimento: o.dataNascimento ? new Date(o.dataNascimento) : null,
                    endereco: o.endereco,
                    numeroMatricula: o.numeroMatricula
                } as IAluno : {
                    cpf: o.cpf,
                    nome: o.nome,
                    dataNascimento: o.dataNascimento ? new Date(o.dataNascimento) : null,
                    endereco: o.endereco,
                    conhecimentos: o.conhecimentos,
                    especialidade: o.especialidade
                } as IProfessor))) : undefined
            ));
    }
}

/* (o.numeroMatricula !== undefined ? {
                    cpf: o.cpf,
                    nome: o.nome,
                    dataNascimento: o.dataNascimento ? new Date(o.dataNascimento) : null,
                    endereco: o.endereco,
                    numeroMatricula: o.numeroMatricula
                } as IAluno : {
                    cpf: o.cpf,
                    nome: o.nome,
                    dataNascimento: o.dataNascimento ? new Date(o.dataNascimento) : null,
                    endereco: o.endereco,
                    conhecimentos: o.conhecimentos,
                    especialidade: o.especialidade
                } as IProfessor) */