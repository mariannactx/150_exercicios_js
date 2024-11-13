window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const numeros = e.target.elements['numeros'].value.split(',')
    document.getElementById('lista-ordenada').innerText = numeros.sort().join(',')
  })
}



