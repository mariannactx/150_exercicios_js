window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const comprimento = parseInt(e.target.elements['comprimento'].value)

    let senha = ""
    for (let i = 0; i < comprimento; i++) {
      const codigoASCIIAleatorio = Math.floor(Math.random() * (125 - 33 + 1) + 33)
      const caracterAleatorio = String.fromCharCode(codigoASCIIAleatorio)

      senha = senha + caracterAleatorio
    }

    document.getElementById('senha').innerText = senha

  })
}