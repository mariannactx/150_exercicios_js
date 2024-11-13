window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    let numero = parseInt(e.target.elements['numero'].value)

    const decomposicao = []

    while (numero > 1) {
      for (let i = 2; i <= numero; i++) {
        if (ehPrimo(i) && numero % i == 0) {
          decomposicao.push(i)
          numero = numero / i
          break
        }
      }
    }

    document.getElementById('decomposicao').innerText = decomposicao.join(',')

  })
}

const ehPrimo = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 