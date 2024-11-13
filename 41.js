function arrayCapitalize(array) {
  return array.map(item => item[0].toUpperCase() + Array.from(item).slice(1).join(""))
}

console.log(arrayCapitalize(['banana', 'maçã', 'abacate']))