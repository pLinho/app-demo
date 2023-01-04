import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IAluno } from 'src/app/api/modelo/i-aluno';
import { IPessoa } from 'src/app/api/modelo/i-pessoa';
import { IProfessor } from 'src/app/api/modelo/i-professor';
import { ApiAlunoService } from 'src/app/api/services/aluno.service';
import { ApiProfessorService } from 'src/app/api/services/professor.service';

@Component({
  selector: 'app-novo-cadastro',
  templateUrl: './novo-cadastro.component.html',
  styleUrls: ['./novo-cadastro.component.scss']
})
export class NovoCadastroComponent {
  form: FormGroup = this.fb.group({
    tipo: [, [Validators.required]],
    cpf: [,],
    nome: [,],
    dataNascimento: [,],
    endereco: [,],
    especialidade: [,],
    conhecimentos: [,],
    numeroMatricula: [,],
  });
  conhecimentos: string[] = [];
  constructor(
    private readonly fb: FormBuilder,
    private readonly ref: MatDialogRef<NovoCadastroComponent>,
    private readonly api_aluno: ApiAlunoService,
    private readonly api_professor: ApiProfessorService,
  ) { }
  cancelar() {
    this.ref.close(false);
  }
  confirmar() {
    const value = this.form.getRawValue();
    const pessoa: IPessoa | IAluno | IProfessor = {};
    if (value.tipo === 'aluno') {
      (pessoa as IAluno).numeroMatricula = value.numeroMatricula || '';
    } else if (value.tipo === 'professor') {
      (pessoa as IProfessor).especialidade = value.especialidade || '';
      (pessoa as IProfessor).conhecimentos = this.conhecimentos;
    }
    pessoa.cpf = value.cpf;
    pessoa.dataNascimento = value.dataNascimento;
    pessoa.nome = value.nome;

    if (value.tipo === 'aluno') {
      this.api_aluno.manter(pessoa as IAluno).subscribe(
        () => this.ref.close(pessoa)
      );
    } else if (value.tipo === 'professor') {
      this.api_professor.manter(pessoa as IProfessor).subscribe(
        () => this.ref.close(pessoa)
      );
    }
  }
  adicionarConhecimento(conhecimento: string) {
    this.conhecimentos.push(conhecimento);
  }
}
