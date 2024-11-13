window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const texto = e.target.elements['texto'].value
    const letras = texto.split('').filter(caracter => caracter.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/)).map(letra => letra.toLowerCase())

    const frequencia = {}

    letras.forEach(letra => {
      if (!frequencia[letra])
        frequencia[letra] = 0

      frequencia[letra]++
    })

    const linhas = Object.keys(frequencia).sort().map(letra => {
      return `<tr><td>${letra}</td><td>${frequencia[letra]}</td></tr>`
    })

    document.getElementById('frequencia').innerHTML = linhas.join('')
  })
}