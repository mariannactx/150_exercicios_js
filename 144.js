window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = parseFloat(e.target.elements['numero'].value)

    const divisores = []

    for (let i = 1; i <= numero; i++) {
      if (numero % i === 0) divisores.push(i)
    }

    document.getElementById('divisores').innerText = divisores.join(',')
  })
}