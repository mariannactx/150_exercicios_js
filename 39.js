function formatarPara2CasasDecimais(numeros) {
  return numeros.map(numero => `${numero.toFixed(2)}`)
}

console.log(formatarPara2CasasDecimais([1.234545, 2.3546456, 3.4554]))