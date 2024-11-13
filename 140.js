var horas = 0
var minutos = 0
var segundos = 0

var interval

var cronometro

function atualizar() {
  cronometro.innerText = `${completar(horas)}:${completar(minutos)}:${completar(segundos)}`
}

function completar(numero) {
  return numero.toString().padStart(2, '0')
}

window.onload = () => {
  cronometro = document.getElementById('cronometro')

  document.getElementById('iniciar').addEventListener('click', () => {

    if (!interval) {
      interval = setInterval(() => {
        if (segundos < 59) {
          segundos++
        } else {
          segundos = 0

          if (minutos < 59) {
            minutos++
          } else {
            minutos = 0
            horas++
          }

        }

        atualizar()
      }, 1000)
    }

  })

  document.getElementById('parar').addEventListener('click', () => {
    clearInterval(interval)

    interval = undefined
  })

  document.getElementById('resetar').addEventListener('click', () => {
    horas = 0
    minutos = 0
    segundos = 0

    atualizar()
  })
}