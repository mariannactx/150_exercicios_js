window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numeros = e.target.elements['numeros'].value.split(',')
    document.getElementById('numeros-ordenados').innerText = numeros.sort((a, b) => b - a).join(',')
  })
}



