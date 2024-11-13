window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new Date(e.target.elements['data'].value + 'T00:00:00')

    document.getElementById('dia-da-semana').innerText = data.toLocaleDateString('pt-BR', { weekday: 'long' })
  })
}