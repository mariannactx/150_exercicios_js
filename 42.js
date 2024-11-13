function maisDe5Caracteres(array) {
  return array.filter(item => item.length > 5)
}

console.log(maisDe5Caracteres(['Abacate', 'Maçã', 'Banana']))