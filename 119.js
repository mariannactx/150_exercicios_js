window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const taxa = parseFloat(e.target.elements['taxa'].value)

    const tempo = Math.log10(2) / Math.log10(1 + taxa / 100)

    document.getElementById('tempo').innerText = tempo.toFixed(2)

  })
}