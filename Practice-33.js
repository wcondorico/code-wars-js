function sispaprock(a,b){
  if(a===b) return "Draw!"
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(a+b)?1:2} won!`
}

console.log(sispaprock("rock","paper"))