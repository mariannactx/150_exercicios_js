function multiplosDe3(numeros) {
  return numeros.filter(numero => numero % 3 == 0)
}

console.log(multiplosDe3([1, 2, 3, 4, 5, 6, 7, 8, 9]))