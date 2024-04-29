function nb_year(p0,percent,aug,p){
  for(s=p0, i=0; s<=p; i++){
    s = s + s*percent/100 + aug 
  }
  return i
}




console.log(nb_year(1000, 2, 50, 1200)) //15