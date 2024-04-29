function sortodd(arr){
  const odd = arr.filter(n=>n%2).sort((a,b)=>a-b)
  return arr.map(n=>n%2? odd.shift():n)
}

console.log(sortodd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))