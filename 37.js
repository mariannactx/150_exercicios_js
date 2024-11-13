function arrayReverse(array) {
  return array.map(item => Array.from(item).reverse().join(""))
}

console.log(arrayReverse(['Banana', 'Maçã', 'Abacate']))