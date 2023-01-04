import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { IAluno } from '../api/modelo/i-aluno';
import { IPessoa } from '../api/modelo/i-pessoa';
import { IProfessor } from '../api/modelo/i-professor';
import { ApiPessoaService } from '../api/services/pessoa.service';
import { MatDialog } from '@angular/material/dialog';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent implements OnInit {
  pessoas?: Array<IPessoa | IAluno | IProfessor>;
  pessoaAtual?: (IPessoa | IAluno | IProfessor);
  professorAtual?: IProfessor;
  alunoAtual?: IAluno;
  tipo?: 'aluno' | 'professor';
  constructor(
    private readonly api: ApiPessoaService,
    private readonly dialog: MatDialog) { }
  ngOnInit(): void {
    this.carregarLista();
  }
  carregarLista() {
    this.api.obterLista().subscribe(v => this.pessoas = v);
  }
  select(event: MatSelectionListChange) {
    this.pessoaAtual = event.source._value ? event.source._value[0] as IPessoa : undefined;
    this.tipo = !!this.pessoaAtual ? (this.pessoaAtual as any).numeroMatricula !== undefined ? 'aluno' : 'professor' : undefined;
    this.alunoAtual = this.tipo === 'aluno' ? this.pessoaAtual as IAluno : undefined;
    this.professorAtual = this.tipo === 'professor' ? this.pessoaAtual as IProfessor : undefined;
  }
  novoCadastro() {
    const dialog = this.dialog.open(NovoCadastroComponent, {

    });
    dialog.afterClosed().subscribe(r => {
      if (typeof r === 'object') {
        if (!this.pessoas) this.pessoas = [];
        this.pessoas?.push(r);
      }
    })
  }
  confirmar() {

  }
}
