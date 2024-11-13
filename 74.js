function contemI(array) {
  return array.filter((item) => {
    const letras = Array.from(item)
    return letras.some(letra => letra == "i")
  })
}

console.log(contemI(['banana', 'maçã', 'abacate', 'kiwi']))