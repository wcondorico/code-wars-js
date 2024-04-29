function queueTime(arr,n){
  if(!arr.length) return 0

  let arr1 = Array(n) 
  for(i=0;i<arr1.length;i++){
    arr1[i] = arr[i]
  }

  let arrSumado = arr1 
  for(f=arr1.length ; f<arr.length ; f++){
    min = arrSumado.indexOf(Math.min(...arrSumado))
    arrSumado = arrSumado.map((n,i)=>i==min ? n+arr[f]:n)
  }
  
  return Math.max(...arrSumado.filter(n=>n!=undefined))
}


console.log(queueTime([2], 5)) 
//console.log(queueTime([10,2,3,4], 2))    //10
//console.log(queueTime([10,4,5,10,1,1], 3))    //14
