window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const binario = e.target.elements['binario'].value
    const decimal = parseInt(binario, 2)

    document.getElementById('binario').innerText = binario
    document.getElementById('decimal').innerText = decimal

  })
}