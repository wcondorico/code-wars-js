function sort(a,b){
  return Array(...new Set(a+b)).sort()
}

console.log(sort('ayc','def'))