window.onload = () => {

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    let soma = 0;

    for (let i = 1; i <= n; i++) {
      soma += i
    }

    document.getElementById('soma').innerText = soma
  })
}

