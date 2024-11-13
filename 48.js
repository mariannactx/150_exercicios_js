function impar(numeros) {
  return numeros.filter(numero => numero % 2 != 0)
}

console.log(impar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))