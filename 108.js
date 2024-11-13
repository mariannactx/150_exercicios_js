window.onload = () => {
  document.getElementById("lancar").addEventListener('click', (e) => {
    e.preventDefault()

    const dado1 = Math.floor(Math.random() * 6 + 1)
    const dado2 = Math.floor(Math.random() * 6 + 1)

    document.getElementById('dado1').innerText = dado1
    document.getElementById('dado2').innerText = dado2

    document.getElementById('soma').innerText = dado1 + dado2

  })
}