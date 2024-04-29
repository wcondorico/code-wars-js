function sum(n){
  for(s=0,i=1 ; i<=n*3 ; i+=3){
    s += 1 / i
  }
  return s.toFixed(2)
}

console.log(sum(5))