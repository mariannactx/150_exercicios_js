function maiusculasInvertidas(array) {
  return array.map(item => Array.from(item).reverse().join("").toUpperCase())
}