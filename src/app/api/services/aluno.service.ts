import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IAluno } from "../modelo/i-aluno";

@Injectable()
export class ApiAlunoService {
    private API = "http://10.250.250.108:8084/estagiario/api/pessoa/"
    constructor(private readonly http: HttpClient) { }
    manter() {
        // this.http.get<IAluno>(this.API + 'obterLista')
        //     .pipe(map<any, IAluno>(v => ({
        //         cpf: v.cpf,
        //         nome: v.nome,
        //         dataNascimento: v.dataNascimento ? new Date(v.dataNascimento) : undefined,
        //         endereco: v.endereco,
        //         numeroMatricula: v.numeroMatricula
        //     })))
    }
}