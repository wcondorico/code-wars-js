function sispaprock(a,b){
  if(a===b) return "Draw!"
  
  const jugada = [a,b]
  let result = ''
  switch(jugada){
    case ["paper","rock"] : result = "Player 1 won!";
    case ["paper","scissors"] : result = "Player 2 won!";
    case ["rock","scissors"] : result = "Player 1 won!";
    case ["rock","paper"] : result = "Player 2 won!";
    case ["scissors","rock"] : result = "Player 2 won!";
    case ["scissors","paper"] : result = "Player 1 won!";
  }
  return result
}

console.log(sispaprock("paper","rock"))