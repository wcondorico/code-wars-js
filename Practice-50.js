function numPot(n,p){
  let arr = String(n).split('').map((v,i)=>Math.pow(Number(v),p+i)).reduce((a,b)=>a+b)
  return arr%n?-1:arr/n
}

console.log(numPot(695,2))