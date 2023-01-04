import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { CadastroPessoaRoutingModule } from './cadastro-pessoa-routing.module';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { ApiModule } from '../api/api.module';
import { CadastroProfessorModule } from './cadastro-professor/cadastro-professor.module';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { GraficoComponent } from './grafico/grafico.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    CadastroPessoaComponent,
    NovoCadastroComponent,
    GraficoComponent
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
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxChartsModule
  ]
})
export class CadastroPessoaModule { }
