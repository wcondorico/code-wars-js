function duplicateCount(text){
  const lower = text.toLowerCase()
  return (new Set(lower.replace(/./g, l=>lower.indexOf(l)!=lower.lastIndexOf(l)?l:''))).size
}
console.log(duplicateCount("aaBbcde"))