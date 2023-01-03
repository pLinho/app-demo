import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { ApiModule } from '../api/api.module';
import { CadastroProfessorModule } from './cadastro-professor/cadastro-professor.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';


@NgModule({
  declarations: [
    CadastroPessoaComponent
  ],
  imports: [
    CommonModule,
    ApiModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    CadastroPessoaRoutingModule,
    CadastroProfessorModule,
    CadastroAlunoModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class CadastroPessoaModule { }
