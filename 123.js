window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const login = e.target.elements['login'].value
    const senha = e.target.elements['senha'].value

    if (login != 'admin' && senha != 'admin') {
      document.getElementById('mensagem').innerText = "Login e senha incorretos"
      return
    }

    if (login != 'admin') {
      document.getElementById('mensagem').innerText = "Login incorreto"
      return
    }

    if (senha != 'admin') {
      document.getElementById('mensagem').innerText = "Senha incorreta"
      return
    }

    document.body.innerHTML = "<h2>Entrou!</h2>"

  })
}