function lookNTimes(arr,n){
  const cant = {}
  return arr.filter(v=>(cant[v] = (cant[v]||0)+1)<=n)
}

console.log(lookNTimes([1,2,1,1,2,9,2,3,3],2))