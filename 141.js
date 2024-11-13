window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.elements['precos'].value.split(';')

    const precos = input.map(valor => parseFloat(valor.replace(',', '.')))

    precos.sort((a, b) => a - b)

    document.getElementById('medio').innerText = precos[Math.floor(precos.length / 2)].toString().replace('.', ',')
    document.getElementById('menor').innerText = precos[0].toString().replace('.', ',')
    document.getElementById('maior').innerText = precos[precos.length - 1].toString().replace('.', ',')
  })
}