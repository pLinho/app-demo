import { Component, Input } from '@angular/core';
import { IProfessor } from 'src/app/api/modelo/i-professor';

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.scss']
})
export class CadastroProfessorComponent {
  @Input()
  professor?: IProfessor;
}
