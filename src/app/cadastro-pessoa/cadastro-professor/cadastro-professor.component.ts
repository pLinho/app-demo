import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IProfessor } from 'src/app/api/modelo/i-professor';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.scss']
})
export class CadastroProfessorComponent {
  private _professor?: IProfessor | undefined;
  public get professor(): IProfessor | undefined {
    return this._professor;
  }
  @Input()
  public set professor(value: IProfessor | undefined) {
    this._professor = value;
    this.form.reset(value);
    this.conhecimentos = value?.conhecimentos || [];

  }
  conhecimentos: string[] = [];
  form: FormGroup = this.fb.group({
    especialidade: [, []],
    cpf: [, []],
    nome: [, []],
    dataNascimento: [, []],
    endereco: [, []],
  });
  constructor(
    private readonly fb: FormBuilder,
  ) { }
  adicionarConhecimento(conhecimento: string) {
    this.conhecimentos.push(conhecimento);
  }
}
