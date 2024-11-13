window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const numeros = e.target.elements['numeros'].value.split(',')
    numeros.sort()

    const media = numeros.reduce((soma, numero) => soma + parseInt(numero), 0) / numeros.length
    const mediana = numeros[Math.floor(numeros.length / 2)]

    let moda
    const frequencia = {}

    numeros.forEach(numero => {

      if (!moda) {
        moda = numero
      }

      if (!frequencia[numero]) {
        frequencia[numero] = 0
      }

      frequencia[numero]++

      if (frequencia[numero] > frequencia[moda])
        moda = numero

    })

    document.getElementById('media').innerText = media.toFixed(2)
    document.getElementById('mediana').innerText = mediana
    document.getElementById('moda').innerText = moda
  })
}