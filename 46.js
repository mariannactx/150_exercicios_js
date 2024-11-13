function contemE(array) {
  return array.filter((item) => {
    const letras = Array.from(item)
    return letras.some(letra => letra == "e")
  })
}

console.log(contemE(['banana', 'maçã', 'abacate']))