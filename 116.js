window.onload = () => {

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    let pares = [], impares = [];

    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        pares.push(i)
      } else {
        impares.push(i)
      }
    }

    document.getElementById('pares').innerText = pares.join(',')
    document.getElementById('impares').innerText = impares.join(',')
  })
}

