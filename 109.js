window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const texto = Array.from(e.target.elements['texto'].value)

    let vogais = 0, consoantes = 0

    texto.forEach(caracter => {
      if (caracter.match(/a|e|i|o|u/i)) {
        vogais++
      } else if (caracter.match(/[b-df-hj-np-t-v-zç]/i)) {
        consoantes++
      }
    })

    document.getElementById('vogais').innerText = vogais
    document.getElementById('consoantes').innerText = consoantes


  })
}