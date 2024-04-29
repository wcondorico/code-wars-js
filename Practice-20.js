function countPositivesSumNegatives(input) {
  return Array.isArray(input) && input.length?
  [input.filter(n => n>0).length , input.filter(n => n<0).reduce((acum,v) => acum+v, 0)] : 
  []
}

let arr = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
console.log(countPositivesSumNegatives(null))
//[4, -10]