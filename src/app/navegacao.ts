
export interface INav {
    path: string;
    label: string;
}
export const NAVEGACAO: INav[] = [
    {
        label: 'Cadastro Pessoa', path: '/'
    },
    {
        label: 'Tarefas', path: '/tasks'
    },
];