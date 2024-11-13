window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = e.target.elements['numero'].value
    const mensagem = ehPrimo(numero) ? 'O número é primo' : 'O número não é primo'

    document.getElementById('mensagem').innerText = mensagem
  })
}

const ehPrimo = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
} 