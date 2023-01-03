import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAluno } from 'src/app/api/modelo/i-aluno';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent {
  form: FormGroup = this.fb.group({
    numeroMatricula: [, []],
    cpf: [, []],
    nome: [, []],
    dataNascimento: [, []],
    endereco: [, []],
  });
  private _aluno?: IAluno | undefined;
  public get aluno(): IAluno | undefined {
    return this._aluno;
  }
  @Input()
  public set aluno(value: IAluno | undefined) {
    this._aluno = value;
    this.form.reset(value);
  }
  constructor(
    private readonly fb: FormBuilder,
  ) { }
}
