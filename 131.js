window.onload = () => {
  const numero = Math.floor(Math.random() * 100)

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const decimal = parseInt(e.target.elements['decimal'].value)

    const classes = decimal.toString().split('')

    let unidades = ''
    let dezenas = ''
    let centenas = ''

    if (decimal > 0) {
      unidades = classes[classes.length - 1]
      unidades = converter(unidades, ['I', 'V', 'X'])
    }

    if (decimal > 9) {
      dezenas = classes[classes.length - 2]
      dezenas = converter(dezenas, ['X', 'L', 'C'])
    }

    if (decimal > 99) {
      centenas = classes[classes.length - 3]
      centenas = converter(centenas, ['C', 'D', 'M'])
    }

    const romano = `${centenas}${dezenas}${unidades}`

    document.getElementById('decimal').innerText = decimal
    document.getElementById('romano').innerText = romano

  })
}

const converter = (numero, numeraisRomanos) => {

  let romano = ''

  if (numero < 4) {
    for (let i = 1; i <= numero; i++) {
      romano = romano + numeraisRomanos[0]
    }
  } else if (numero == 4) {
    romano = `${numeraisRomanos[0]}${numeraisRomanos[1]}`
  } else if (numero == 5) {
    romano = numeraisRomanos[1]
  } else if (numero < 9) {
    romano = numeraisRomanos[1]
    for (let i = 1; i <= numero - 5; i++) {
      romano = romano + numeraisRomanos[0]
    }
  } else {
    romano = `${numeraisRomanos[0]}${numeraisRomanos[2]}`
  }

  return romano
}