function doubleChar(str) {
  return [...str].map(v=>v+v).join('')
}

console.log(doubleChar('Hello WORLD'))