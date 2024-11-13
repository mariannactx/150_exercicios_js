window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let texto = e.target.elements['texto'].value
    const palavraAntiga = e.target.elements['palavra-antiga'].value
    const palavraNova = e.target.elements['palavra-nova'].value

    texto = texto.replaceAll(palavraAntiga, palavraNova)

    document.getElementById('resultado').innerText = texto
  })
}