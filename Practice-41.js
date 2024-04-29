function findUniq(arr){
  return arr.find((n,i,w)=>w.indexOf(n)==w.lastIndexOf(n))
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))