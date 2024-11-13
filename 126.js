window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const palavras = e.target.elements['nomes'].value.split(' ')

    document.getElementById('numero').innerText = palavras.length
  })
}