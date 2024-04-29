function sameAmounth(str){
  return str.toLowerCase().split('').reduce((a,b)=>b=='x'?a+1:b=='o'?a-1:a+0,0)==0
}

console.log(sameAmounth('ooo')) //true