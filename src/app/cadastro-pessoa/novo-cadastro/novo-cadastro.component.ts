import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  constructor(
    private readonly fb: FormBuilder
  ) { }
}
