function points(games) {
  return games
  .map(w => w.split(':').map(Number))
  .map(m => {
    if(m[0]==m[1]) return 1;
    return m[0]-m[1]>0?3:0;
  }).reduce((a,b)=>a+b)
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) //30