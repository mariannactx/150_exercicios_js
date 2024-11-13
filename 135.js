window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const erro = document.getElementById('erro')
    erro.style = 'display:none'

    const saque = document.getElementById('saque')
    saque.style = 'display:none'

    const valor = parseInt(e.target.elements['valor'].value)

    if (!valor) {
      erro.style = 'display:block'
      return false
    }

    const notas = {
      2: 0,
      5: 0,
      10: 0,
      20: 0,
      50: 0,
      100: 0,
      200: 0
    }

    const classes = valor.toString().split('')


    if (valor > 0) {
      const unidades = classes[classes.length - 1]

      if (unidades == 1 || unidades == 3) {
        erro.style = 'display:block'
        return false
      } else if (unidades % 2 == 0) {
        notas[2] = parseInt(unidades) / 2
      } else {
        notas[2] = (unidades - 5) / 2
        notas[5] = 1
      }
    }

    if (valor > 9) {
      const dezenas = classes[classes.length - 2]

      switch (dezenas) {
        case 1:
          notas[10] = 1
          break
        case 2:
          notas[20] = 1
          break
        case 3:
          notas[10] = 1
          notas[20] = 1
          break
        case 4:
          notas[20] = 2
          break
        case 5:
          notas[50] = 1
          break
        case 6:
          notas[10] = 1
          notas[50] = 1
          break
        case 7:
          notas[20] = 1
          notas[50] = 1
          break
        case 8:
          notas[10] = 1
          notas[20] = 1
          notas[50] = 1
          break
        case 9:
          notas[20] = 2
          notas[50] = 1
      }
    }

    if (valor > 99) {
      const centenas = classes[classes.length - 3]

      if (centenas == 1) {
        notas[100] = 1
      } else if (centenas % 2 == 0) {
        notas[200] = centenas / 2
      } else {
        notas[100] = 1
        notas[200] = Math.floor(centenas / 2)
      }
    }

    if (valor > 999) {
      notas[200] += 5
    }

    document.getElementById('notas-2').innerText = notas[2]
    document.getElementById('notas-5').innerText = notas[5]
    document.getElementById('notas-10').innerText = notas[10]
    document.getElementById('notas-20').innerText = notas[20]
    document.getElementById('notas-50').innerText = notas[50]
    document.getElementById('notas-100').innerText = notas[100]
    document.getElementById('notas-200').innerText = notas[200]

    saque.style = 'display:block'

  })
}
