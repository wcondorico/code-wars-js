function openOrSenior(arr){
  return arr.map(a=>a[0]>=55 && a[1]>7?"Senior":"Open");
}


input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]