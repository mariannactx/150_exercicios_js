window.onload = () => {
  var produtos = []

  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const produto = {
      nome: e.target.elements['produtos'].selectedOptions[0].attributes.name.value,
      valor: e.target.elements['produtos'].value
    }

    produtos.push(produto)

    const novoProduto = document.createElement('td').innerText = produto.nome

    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `<td>${produto.nome}</td><td>R$ ${produto.valor.replace('.', ',')}</td>`
    document.getElementById('produtos').append(novaLinha)


    let total = produtos.reduce((soma, produto) => {
      return soma + parseFloat(produto.valor)
    }, 0)

    let desconto = 0
    if (total >= 100) {
      desconto = total * 0.1

      total -= desconto
    }

    document.getElementById('desconto').innerText = `R$ ${desconto.toFixed(2).replace('.', ',')}`
    document.getElementById('total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`
  })


}

