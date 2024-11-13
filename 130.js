window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(e.target);
    const linguagens = []
    for (const linguagem of data.entries()) {
      linguagens.push(linguagem[1])
    }

    document.getElementById("linguagens").innerText = linguagens.join(', ')
  })
}
