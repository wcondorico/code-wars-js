function jadenCase(s){
  return s
  .split(' ')
  .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
  .join(' ')
}

console.log(jadenCase('hello world my friend'))
