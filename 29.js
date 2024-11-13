function comecaComA(palavras) {
  return palavras.filter(palavra => palavra[0] == 'A')
}

console.log(comecaComA(['Banana', 'Maçã', 'Abacate', 'Pêra', 'Abacaxi']))