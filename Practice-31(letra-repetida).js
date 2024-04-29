function letters(str){
  const low = str.toLowerCase()
  return low.replace(/./g,l=>low.indexOf(l)===low.lastIndexOf(l)?'(':')')
}

console.log(letters('Supralapsarian'))
//      (   )
//      (()))())())()(
//      )()))()))))()(