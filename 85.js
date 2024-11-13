function repetirConsoantes(array) {
  return array.map(item => {
    const letras = Array.from(item)

    return letras.map(letra => {
      if (letra.match(/[b-df-hj-np-t-v-zç]/i)) {
        return letra + letra
      }

      return letra
    }).join('')
  })
}

console.log(repetirConsoantes(['banana', 'abacate']))