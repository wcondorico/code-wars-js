function words(str){
  const words = str.toLowerCase().split(' ')
  const values = words.map(w=>w.split('').map(l=>l.charCodeAt(0)-96).reduce((a,b)=>a+b,0));
  return words[values.indexOf(Math.max(...values))]
}

console.log(words('Hello world zzzzz'))