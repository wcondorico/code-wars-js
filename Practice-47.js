function namef(arr){

  switch(arr.length){
    case 0: return "no one likes this"
    case 1: return `${arr[0]} like this`
    case 2: return `${arr[0]} and ${arr[1]} like this`
    case 3: return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  }
  return `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this` 
}

console.log(namef(['name1','name2','n3','n4','n5']))