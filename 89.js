function descapitalizarPrimeiraECapitalizarUltima(array) {
  return array.map(item => {
    const primeiraLetra = item[0].toLowerCase()
    const ultimaLetra = item[item.length - 1].toUpperCase()

    const letras = Array.from(item).slice(1, item.length - 1)
    return primeiraLetra + letras.join("") + ultimaLetra
  })
}

console.log(descapitalizarPrimeiraECapitalizarUltima(['Banana', 'Maçã', 'Abacate']))