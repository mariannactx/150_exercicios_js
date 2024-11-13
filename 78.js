function contemU(array) {
  return array.filter((item) => {
    const letras = Array.from(item)
    return letras.some(letra => letra == "u")
  })
}

console.log(contemI(['banana', 'maçã', 'abacate', 'kiwi', 'uva']))