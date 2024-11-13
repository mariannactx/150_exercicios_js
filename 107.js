window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    document.getElementById("numero").innerText = ''
    document.getElementById("fatorial").innerText = ''

    if (n > 0) {
      document.getElementById("numero").innerText = n
      document.getElementById("fatorial").innerText = fatorial(n)
    }
  })
}

const fatorial = (n) => {
  if (n == 1) return 1

  return n * fatorial(n - 1)
}