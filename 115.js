window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    let mensagem
    if (ehPerfeito(n)) {
      mensagem = 'Número é perfeito'
    } else {
      mensagem = 'Número não é perfeito'
    }

    document.getElementById('mensagem').innerText = mensagem

  })
}

function ehPerfeito(numero) {
  let soma = 0

  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
      soma += i
    }
  }

  return soma == numero
}