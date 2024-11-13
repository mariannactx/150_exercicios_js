window.onload = () => {
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    const n = parseInt(e.target.elements['numero'].value)

    const tabuada = document.getElementById('tabuada')
    tabuada.innerText = ''
    document.getElementById('numero').innerText = ''

    if (n > 0) {
      document.getElementById('numero').innerText = n
      for (let i = 0; i <= 10; i++) {
        const p = document.createElement('p')
        p.innerText = `${n} * ${i} = ${n * i}`
        tabuada.append(p)
      }
    }
  })
}