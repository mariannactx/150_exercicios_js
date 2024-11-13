function removerConsoantes(array) {
  return array.map(item => item.replace(/[b-df-hj-np-t-v-zç]/gi, ''))
}

console.log(removerConsoantes(['banana', 'maçã', 'abacate']))