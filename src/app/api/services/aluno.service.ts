import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { IAluno } from "../modelo/i-aluno";

@Injectable()
export class ApiAlunoService {
    private API = "http://10.250.250.108:8084/estagiario/api/aluno/"
    constructor(private readonly http: HttpClient) { }
    manter(aluno: IAluno) {
        return this.http.post<IAluno>(this.API + 'manter', {
            ...aluno,
        } as any)
    }
}