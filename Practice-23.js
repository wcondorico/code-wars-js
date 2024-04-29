function findShort(s){
  return Math.min(...s.split(' ').map(w=>w.length));
}

console.log(findShort("as asdasd"))