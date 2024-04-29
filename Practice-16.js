function highAndLow(numbers){
  let array = numbers.split(' ')
  return `${Math.max(...array)} ${Math.min(...array)}`
}

console.log(highAndLow("1 2"))
