function namef(n){
  const large = n*2-1
  return Array(n)
  .fill('*')
  .map((v,i)=>v.repeat(i*2+1))
  .map(str=>str.padStart((large+str.length)/2).padEnd(large))
}

console.log(namef(6))