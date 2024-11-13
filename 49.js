function ultimaLetraMaiuscula(array) {
  return array.map(item => {
    const ultimaLetra = item[item.length - 1].toUpperCase()

    return item.slice(0, item.length - 1) + ultimaLetra

  })
}

console.log(ultimaLetraMaiuscula(['abacate', 'banana', 'maçã']))