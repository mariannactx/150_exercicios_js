function imparesMaioresQue15(numeros) {
  return numeros.filter(numero => numero % 2 != 0 && numero > 15)
}

console.log(imparesMaioresQue15([0, 1, 20, 31, 42, 53, 64, 75, 86, 97]))