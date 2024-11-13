function removeVogal(array) {
  return array.map(item => item.replace(/a|e|i|o|u/gi, ''))
}

console.log(removeVogal(['bAnAnA', 'abacate']))