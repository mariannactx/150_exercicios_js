window.onload = () => {
  document.getElementById('operador').addEventListener('change', (e) => {
    if (e.target.value == 6) {
      document.getElementById('esquerda').disabled = true
    } else {
      document.getElementById('esquerda').disabled = false
    }
  })

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const esquerda = parseInt(e.target.elements['esquerda'].value)
    const direita = parseInt(e.target.elements['direita'].value)

    if (esquerda && direita) {

      const operador = parseInt(e.target.elements['operador'].value)
      let resultado;

      switch (operador) {
        case 1:
          resultado = esquerda + direita
          break
        case 2:
          resultado = esquerda - direita
          break
        case 3:
          resultado = esquerda * direita
          break
        case 4:
          resultado = esquerda / direita
          break
        case 5:
          resultado = esquerda ** direita
          break
        case 6:
          resultado = Math.sqrt(direita)
      }

      document.getElementById('resultado').innerText = resultado

    }
  })


}

