window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const nomes = e.target.elements['nomes'].value.split(',')

    nomes.sort((a, b) => a.localeCompare(b))

    document.getElementById('nomes').innerText = nomes.join(',')
  })
}