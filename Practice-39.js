function breakCamel(str){
  return str.replace(/[A-Z]/g, ' $&')
}

console.log(breakCamel('CamelCasing'))