function bus(a) {
  return a.map(([subida,bajada])=>subida-bajada).reduce((a,b)=>a+b)
}

const p = [[10,0],[3,5],[5,8]]

console.log(bus(p))
//5