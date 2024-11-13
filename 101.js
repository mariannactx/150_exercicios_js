window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const primeiraNota = parseFloat(e.target.elements['primeira'].value)
    const segundaNota = parseFloat(e.target.elements['segunda'].value)
    const terceiraNota = parseFloat(e.target.elements['terceira'].value)
    const quartaNota = parseFloat(e.target.elements['quarta'].value)

    const media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4

    const status = media >= 7 ? 'APROVADO' : 'REPROVADO'

    document.getElementById('status').innerText = status
  })
}