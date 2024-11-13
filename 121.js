window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const nascimento = new Date(e.target.elements['nascimento'].value + 'T00:00:00')
    const hoje = new Date()

    let diferenca = hoje.getFullYear() - nascimento.getFullYear()

    if (nascimento.getMonth() > hoje.getMonth()) {
      diferenca -= 1
    }

    document.getElementById('resultado').innerText = diferenca
  })
}