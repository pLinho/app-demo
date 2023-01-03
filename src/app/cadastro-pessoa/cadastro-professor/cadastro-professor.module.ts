import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProfessorRoutingModule } from './cadastro-professor-routing.module';
import { CadastroProfessorComponent } from './cadastro-professor.component';


@NgModule({
  declarations: [
    CadastroProfessorComponent
  ],
  imports: [
    CommonModule,
    CadastroProfessorRoutingModule
  ],
  exports: [
    CadastroProfessorComponent,
  ]
})
export class CadastroProfessorModule { }
