function middle(str){
  return str.length%2==0 ? str.slice((str.length/2)-1,(str.length/2)+1): str.charAt(str.length/2)
}

console.log(middle("abcba"))
// "es"