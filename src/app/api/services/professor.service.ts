import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IPessoa } from "../modelo/i-pessoa";

@Injectable()
export class ApiProfessorService {
    private API = "http://10.250.250.108:8084/estagiario/api/pessoa/"
    constructor(private readonly http: HttpClient) { }
    obterLista() {
        this.http.get<IPessoa>(this.API + 'obterLista')
            .pipe(map(v => ({
                cpf: v.cpf,
                nome: v.nome,
                dataNascimento: v.dataNascimento ? new Date(v.dataNascimento) : null,
                endereco: v.endereco,
            })))
    }
}