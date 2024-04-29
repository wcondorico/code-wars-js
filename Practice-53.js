function sumArray(array) {
  
  const max = Math.max(...array)
  const min = Math.min(...array)
  return array?array.filter((v,i,w)=>i!==w.indexOf(max)&&i!=w.indexOf(min)).reduce((a,b)=>a+b,0):0
}

console.log(sumArray([ 0, 1, 6, 10, 10 ]))