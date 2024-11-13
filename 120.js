window.onload = () => {
  const numero = Math.floor(Math.random() * 100)

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const input = parseInt(e.target.elements['numero'].value)

    let mensagem

    if (input < numero) {
      mensagem = `O número é maior que ${input}`
    } else if (input > numero) {
      mensagem = `O número é menor que ${input}`
    } else {
      mensagem = `Acertou!`
    }

    document.getElementById('resultado').innerText = mensagem

  })
}