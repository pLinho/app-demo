import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ApiPessoaService } from "./services/pessoa.service";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        ApiPessoaService,

    ],
    exports: [
    ]
})
export class ApiModule { }