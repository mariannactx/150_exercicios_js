window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const cpf = e.target.elements['cpf'].value

    if (cpfEhValido(cpf)) {
      document.getElementById('resultado').innerText = 'O CPF é válido'
    } else {
      document.getElementById('resultado').innerText = 'O CPF é inválido'
    }

  })
}

function cpfEhValido(cpf) {
  const digitos = cpf.match(/\d/g).map(digito => parseInt(digito))

  if (!digitos || digitos.length != 11) {
    return false
  }

  let digito = 0
  let soma = 0

  for (let multiplicador = 10; multiplicador >= 2; multiplicador--) {
    soma = soma + (digitos[digito] * multiplicador)
    digito++
  }

  let mod = soma % 11

  if (mod < 2 && digitos[9] != 0) {
    return false
  }

  if (mod >= 2 && 11 - mod != digitos[9]) {
    return false
  }

  digito = 0
  soma = 0
  for (let multiplicador = 11; multiplicador >= 2; multiplicador--) {
    soma = soma + (digitos[digito] * multiplicador)
    digito++
  }

  mod = soma % 11

  if (mod < 2 && digitos[10] != 0) {
    return false
  }

  if (mod >= 2 && 11 - mod != digitos[10]) {
    return false
  }

  return true
}