window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const tempo = parseFloat(e.target.elements['tempo'].value)
    const distancia = parseFloat(e.target.elements['distancia'].value)

    const velocidadeMedia = distancia / tempo

    document.getElementById('velocidade-media').innerText = velocidadeMedia.toFixed(2)
  })
}