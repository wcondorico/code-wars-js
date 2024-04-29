function lookBounces(h,b,w){
  return w>=h || b<=0 || b>=1 ? -1 : 2 + lookBounces(h*b,b,w)
}

console.log(lookBounces(10,0.51,5)) 