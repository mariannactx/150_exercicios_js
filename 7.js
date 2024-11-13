const aluno = {
  nome: 'Marianna',
  cpf: '123.456.789-09',
  cidade: 'João Pessoa',
  notas: [10, 9.5, 8, 7]
}

console.log(aluno.nome, aluno.cpf, aluno.cidade, aluno.notas[0], aluno.notas[1], aluno.notas[2], aluno.notas[3])

const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length
console.log(media)

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)]
const notaConvertida = notaAleatoria * 10

console.log(`A nota aleatória convertida é ${notaConvertida}`)