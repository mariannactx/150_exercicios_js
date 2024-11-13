window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const real = parseFloat(e.target.elements['real'].value)

    const dolar = real / 5.74
    const euro = real / 6.14
    const libra = real / 7.41

    document.getElementById('dolar').innerText = dolar.toFixed(2).toString().replace('.', ',')
    document.getElementById('euro').innerText = euro.toFixed(2).toString().replace('.', ',')
    document.getElementById('libra').innerText = libra.toFixed(2).toString().replace('.', ',')
  })
}
