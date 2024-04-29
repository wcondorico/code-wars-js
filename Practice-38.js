function printer_error(str){
  for(i=0,s=0;i<str.length;i++){
    /[^a-m]/.test(str[i])?s+=1:s=s
  }
  return `${s}/${i}`
}

let s="aaaxbbbbyyhwawiwjjjwwm"
console.log(printer_error(s) )// "8/22"