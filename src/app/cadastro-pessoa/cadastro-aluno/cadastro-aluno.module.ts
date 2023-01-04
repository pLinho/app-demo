import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroAlunoRoutingModule } from './cadastro-aluno-routing.module';
import { CadastroAlunoComponent } from './cadastro-aluno.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    CadastroAlunoComponent
  ],
  imports: [
    CommonModule,
    CadastroAlunoRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,

  ],
  exports: [
    CadastroAlunoComponent

  ]
})
export class CadastroAlunoModule { }
