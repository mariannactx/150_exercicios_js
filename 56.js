function multiplosDe4(numeros) {
  return numeros.filter(numero => numero % 4 == 0)
}

console.log(multiplosDe4([1, 2, 3, 4, 5, 6, 7, 8, 9]))
