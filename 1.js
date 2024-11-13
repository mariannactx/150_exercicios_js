var nome = 'Marianna';
const cpf = '123.456.789.09';

function getSobrenome() {
  let sobreNome = 'Teixeira';
  return sobreNome;
}

console.log(nome)
console.log(getSobrenome())
console.log(cpf)

console.log(`${nome} ${getSobrenome()} ${cpf}`)