function imparesMenoresQue20(numeros) {
  return numeros.filter(numero => numero % 2 != 0 && numero < 20)
}