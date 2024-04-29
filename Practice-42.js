function namef(a,b){
  for (i = Math.min(a,b), s=0; i <= Math.max(a,b); i++) {
    s = s+i 
  }
  return s
}

console.log(namef(6,10))