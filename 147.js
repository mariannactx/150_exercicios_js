window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = e.target.elements['notas'].value.split(';')

    const notas = input.map(valor => parseFloat(valor.replace(',', '.')))

    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length

    let maior, menor;

    notas.forEach((nota) => {

      if (!menor || nota < menor) {
        menor = nota
      }

      if (!maior || nota > maior) {
        maior = nota
      }

    })

    document.getElementById('menor').innerText = menor.toFixed(1).replace(',', '.')
    document.getElementById('maior').innerText = maior.toFixed(1).replace(',', '.')
    document.getElementById('media').innerText = media.toFixed(1).replace(',', '.')
  })
}