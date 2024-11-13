window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numero1 = parseInt(e.target.elements['numero1'].value)
    const numero2 = parseInt(e.target.elements['numero2'].value)

    const menor = numero1 < numero2 ? numero1 : numero2

    let divisor = 1

    for (let i = 2; i <= menor; i++) {
      if (numero1 % i == 0 && numero2 % i == 0)
        divisor = i
    }

    document.getElementById('numero1').innerText = numero1
    document.getElementById('numero2').innerText = numero2
    document.getElementById('divisor').innerText = divisor
  })
}