window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = e.target.elements['numero'].value

    document.getElementById('valor-absoluto').innerText = Math.abs(numero)
  })
}
