const notas = [10, 9.5, 8]

console.log(`A primeira nota do aluno é: ${notas[0]}`)
console.log(`A segunda nota do aluno é: ${notas[1]}`)
console.log(`A terceira nota do aluno é: ${notas[2]}`)

const media = notas.reduce((a, b) => a + b, 0) / notas.length
console.log(`A média do aluno é: ${media}`)

if (media >= 7) {
  console.log('O aluno está: APROVADO')
} else {
  console.log('O aluno está: REPROVADO')
}