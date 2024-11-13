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

const nomes = alunos.map(aluno => aluno.nome)

console.log(nomes)