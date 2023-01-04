import { Component, Input } from '@angular/core';
import { IAluno } from 'src/app/api/modelo/i-aluno';
import { IPessoa } from 'src/app/api/modelo/i-pessoa';
import { IProfessor } from 'src/app/api/modelo/i-professor';

export var multi = [
  /* {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  }, */

  /* {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  }, */

  /* {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  } */
];



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent {
  multi?: any[];
  view: [any, any] = [350, 350];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Cadastro';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme: any = {
    domain: ['#5AA454', '#115599', '#335577']
  };

  private _source?: IPessoa[] | undefined;
  public get source(): IPessoa[] | undefined {
    return this._source;
  }
  @Input()
  public set source(value: IPessoa[] | undefined) {
    this._source = value;
    const dataset: any[] = [];
    dataset.push({
      name: "Pessoas",
      series: [
        {
          name: "Alunos",
          value: value?.filter((i: IAluno) => i.numeroMatricula !== undefined).length
        },
        {
          name: "Professor",
          value: value?.filter((i: IAluno) => i.numeroMatricula === undefined).length
        }
      ]
    })

    this.multi = dataset;
  }

  constructor() {
    Object.assign(this, { multi })
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
