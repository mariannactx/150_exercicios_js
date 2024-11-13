const alunos = [
  {
    nome: 'Maria',
    idade: 18,
    notas: [10, 10, 10]
  },
  {
    nome: 'João',
    idade: 10,
    notas: [9, 9, 9]
  }
]

const maiorDeIdade = alunos.filter(aluno => aluno.idade >= 18)
console.log(maiorDeIdade)