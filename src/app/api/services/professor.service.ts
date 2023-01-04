import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProfessor } from "../modelo/i-professor";

@Injectable()
export class ApiProfessorService {
    private API = "http://10.250.250.108:8084/estagiario/api/professor/"
    constructor(private readonly http: HttpClient) { }
    manter(aluno: IProfessor) {
        return this.http.post<IProfessor>(this.API + 'manter', aluno)
    }
}