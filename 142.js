window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.elements['temperaturas'].value.split(';')

    const temperaturas = input.map(valor => parseFloat(valor.replace(',', '.')))

    const media = temperaturas.reduce((soma, temperatura) => soma + temperatura, 0) / temperaturas.length

    let maior, menor;

    temperaturas.forEach((temperatura) => {

      if (!menor || temperatura < menor) {
        menor = temperatura
      }

      if (!maior || temperatura > maior) {
        maior = temperatura
      }

    })

    document.getElementById('menor').innerText = menor.toFixed(1).replace(',', '.')
    document.getElementById('maior').innerText = maior.toFixed(1).replace(',', '.')
    document.getElementById('media').innerText = media.toFixed(1).replace(',', '.')
  })
}