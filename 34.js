const alunos = [
  {
    nome: 'Maria',
    idade: 10,
    notas: [10, 10, 10]
  },
  {
    nome: 'João',
    idade: 10,
    notas: [9, 9, 9]
  }
]

const media = alunos.reduce((soma, aluno) => soma + aluno.idade, 0) / alunos.length

console.log(media)