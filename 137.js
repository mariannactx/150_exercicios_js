window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const palavras = e.target.elements['palavras'].value.split(',')
    const palavra = e.target.elements['palavra'].value

    document.getElementById('resultado').innerText = `A palavra ${palavras.includes(palavra) ? '' : 'não'} está na lista`
  })
}