window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numeros = e.target.elements['numeros'].value.split(',')

    let menor, maior
    numeros.forEach(numero => {
      if (!menor || numero < menor) {
        menor = numero
      }

      if (!maior || numero > maior) {
        maior = numero
      }
    })

    document.getElementById('menor').innerText = menor
    document.getElementById('maior').innerText = maior
  })
}



