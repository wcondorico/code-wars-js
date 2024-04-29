function isTriangle(a,b,c){
  const max = Math.max(a,b,c)
  return max<Array(a,b,c).filter((v,i) => v!=max || i!=Array(a,b,c).indexOf(max)).reduce((a,b)=>a+b)
}

console.log(isTriangle(4,4,1)) 