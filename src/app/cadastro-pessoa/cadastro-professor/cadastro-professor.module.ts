import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProfessorRoutingModule } from './cadastro-professor-routing.module';
import { CadastroProfessorComponent } from './cadastro-professor.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CadastroProfessorComponent,
  ],
  imports: [
    CommonModule,
    CadastroProfessorRoutingModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,

  ],
  exports: [
    CadastroProfessorComponent,
  ]
})
export class CadastroProfessorModule { }
