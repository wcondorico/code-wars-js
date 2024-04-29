function betterThanAverage(classPoints, yourPoints) {
  let total = 0

  classPoints.forEach(element => {
    total+=element
  });
  
  let average = total/classPoints.length
  return average>yourPoints ? False : True 
}