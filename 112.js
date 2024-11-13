window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const palavra = e.target.elements['palavra'].value

    let mensagem;
    if (ehPalindromo(palavra)) {
      mensagem = `${palavra} é um palíndromo`
    } else {
      mensagem = `${palavra} não é um palíndromo`
    }

    document.getElementById('mensagem').innerText = mensagem

  })
}

const ehPalindromo = (palavra) => {
  let esquerda = 0, direita = palavra.length - 1
  while (esquerda < palavra.length / 2) {
    if (palavra[esquerda] != palavra[direita]) {
      return false
    }

    esquerda++
    direita--
  }

  return true
}