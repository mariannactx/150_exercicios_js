function repetirVogais(array) {
  return array.map(item => {
    const letras = Array.from(item)

    return letras.map(letra => {
      if (letra.match(/a|e|i|o|u/i)) {
        return letra + letra
      }

      return letra
    }).join('')
  })
}

console.log(repetirVogais(['banana', 'abacate']))