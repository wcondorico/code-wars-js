function isograma(str){
  return new Set(str.toLowerCase()).size==str.length? true:false;
}

console.log(isograma('abA'))
