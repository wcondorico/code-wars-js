function same(a,b){
  return !!a && !!b && a.map(v=>Math.pow(v,2)).sort((a,b)=>a-b).every((n,i)=>n==b.sort((a,b)=>a-b)[i])
}

const p = [5, 5, 6, 6, 8, 10, 1, 0, 6, 8, 3, 8, 6, 2, 2]
const v = [1, 36, 4, 64, 36, 0, 9, 64, 25, 36, 64, 25, 100, 4, 36]

console.log(same(p,v))