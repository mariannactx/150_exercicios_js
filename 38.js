function terminaComA(array) {
  return array.filter(item => item[item.length - 1] == 'a')
}

console.log(terminaComA(['Banana', 'Maçã', 'Abacate']))