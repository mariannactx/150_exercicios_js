window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    let sequencia = [1, 1];
    let ultimo = 1;
    while (ultimo < n) {
      ultimo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]

      if (ultimo <= n) {
        sequencia.push(ultimo)
      }
    }

    const fibonacci = document.getElementById('fibonacci').innerText = sequencia.join(' ')
  })
}