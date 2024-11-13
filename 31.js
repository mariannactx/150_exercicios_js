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

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome)
}