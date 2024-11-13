window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = parseInt(e.target.elements['numero'].value)
    const primos = []

    for (let i = 2; i <= numero; i++) {
      if (ehPrimo(i))
        primos.push(i)
    }

    document.getElementById('primos').innerText = primos.join(',')
  })
}

const ehPrimo = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 