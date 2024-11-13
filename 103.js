window.onload = () => {
  const numeroAleatorio = Math.floor(Math.random() * 100)

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = e.target.elements['numero'].value

    let mensagem;

    if (numero == numeroAleatorio) {
      mensagem = 'Você acertou!'
    } else if (numero > numeroAleatorio) {
      mensagem = 'O número aleatório é menor que ' + numero
    } else {
      mensagem = 'O número aleatório é maior que ' + numero
    }

    document.getElementById('mensagem').innerText = mensagem
  })
}

