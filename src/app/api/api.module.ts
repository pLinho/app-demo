import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApiPessoaService } from "./services/pessoa.service";
import { ApiAlunoService } from "./services/aluno.service";
import { ApiProfessorService } from "./services/professor.service";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        ApiPessoaService,
        ApiAlunoService,
        ApiProfessorService,
    ],
    exports: [
    ]
})
export class ApiModule { }