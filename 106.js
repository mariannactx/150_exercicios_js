window.onload = () => {
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const nomes = e.target.elements['nomes'].value.split(',')

    let maisLongo, maisCurto;

    nomes.forEach((nome) => {
      if (!maisLongo || nome.length > maisLongo.length) {
        maisLongo = nome
      }

      if (!maisCurto || nome.length < maisCurto.length) {
        maisCurto = nome
      }
    })

    document.getElementById('mais-longo').innerText = maisLongo
    document.getElementById('mais-curto').innerText = maisCurto
  })
}