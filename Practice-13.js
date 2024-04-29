function square(num){
  return +num
  .toString()
  .split('')
  .map(n=>n*n)
  .join('')
}

console.log(square(3212))