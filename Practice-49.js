function removeDuplicates(list, N) {
  let cache = {}
  return list.filter(n => (cache[n] = (cache[n]||0) +1) <= N) ;
}
console.log(removeDuplicates([2,4,2,2,4,4,7,7,7,7,7],2))