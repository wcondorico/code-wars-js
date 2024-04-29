function queueTime(arr,n){
  let w = Array(n).fill(0)

  for(let num of arr){
    let imin = w.indexOf(Math.min(...w))
    w[imin] += num
  }
  return Math.max(...w)
}

console.log(queueTime([2,4],1))