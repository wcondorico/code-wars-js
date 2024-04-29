function deleteFirst(arr){
  return arr.filter((_,i,a)=>a.indexOf(Math.min(...a))!==i);
}

console.log(deleteFirst([5, 3, 2, 1, 4, 1]))