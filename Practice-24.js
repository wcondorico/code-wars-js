function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/gi,'').split('').map(l=>l.charCodeAt(0)-96).join(' ')
}
console.log(alphabetPosition('.fh'))