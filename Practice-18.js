function order(str){
  return str
  .split('')
  .map((s,i)=>s.toUpperCase()+s.toLowerCase().repeat(i))
  .join('-')
}

console.log(order("aBCde"))
//A-Bb-Ccc