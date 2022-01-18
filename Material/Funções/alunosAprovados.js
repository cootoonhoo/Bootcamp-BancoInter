const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 1,
		turma: '2C',
	}
];

function Aprovados(alunos, media){
    let auxAprovados = [];

    for(let i = 0; i < alunos.length; i++){
        let {nota, nome} = alunos[i]
        if(nota >= media){
            auxAprovados.push(nome)
        }
    }
    return auxAprovados
}
var result = Aprovados(alunos,5)

console.log(result);