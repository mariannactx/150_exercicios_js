window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numeros = e.target.elements['numeros'].value.split(',')
    const primos = []

    numeros.forEach(numero => {
      if (ehPrimo(numero))
        primos.push(numero)
    })

    document.getElementById('primos').innerText = primos.join(',')
  })
}

const ehPrimo = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 