window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const decimal = parseFloat(e.target.elements['decimal'].value)
    const binario = (decimal >>> 0).toString(2)

    document.getElementById('decimal').innerText = decimal
    document.getElementById('binario').innerText = binario

  })
}