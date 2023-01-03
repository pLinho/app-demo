import { Component } from '@angular/core';
import { NAVEGACAO } from './navegacao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navegacao = NAVEGACAO;
}
