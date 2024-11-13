function contemY(array) {
  return array.filter((item) => {
    const letras = Array.from(item)
    return letras.some(letra => letra == "y")
  })
}
