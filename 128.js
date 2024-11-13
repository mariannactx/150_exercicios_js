window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const celsius = parseInt(e.target.elements['celsius'].value)
    const kelvin = celsius + 273
    const fahrenheit = (celsius * 9 / 5) + 32

    document.getElementById('celsius').innerText = celsius
    document.getElementById('kelvin').innerText = kelvin
    document.getElementById('fahrenheit').innerText = fahrenheit

  })
}