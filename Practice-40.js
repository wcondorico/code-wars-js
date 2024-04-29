function lookBounces(h,  b,  w) {
  if(w>=h||!(b<1&&b>0)) return -1
  for(i=0,s=h*b; s>w; i+=2){
    s = s*b
  }
  return i+1
}

console.log(lookBounces(10,0.75,5)) //3