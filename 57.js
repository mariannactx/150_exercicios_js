function minusculasInvertidas(array) {
  return array.map(item => Array.from(item).reverse().join("").toLowerCase())
}

console.log(minusculasInvertidas(['BANANA', 'MAÇÃ', 'ABACATE']))