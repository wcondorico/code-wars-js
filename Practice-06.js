var countSheep = function (num){
  let sheep = ''
  for(i=1; i<=num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
}