   function removemarks(string){
    if(string.indexOf('!') > -1){ // if string contains !
      let insta = string.match(/!/g); //Finds all the !s
      let regx = `!{${insta.length-1}}?` //regex expression in string form
      let reg = new RegExp(regx, 'i')// regex in regex. Locate the !s x amount of times and case insensitive but that's not needed with puncuation
      string = string.replace(reg, '')// replaces it with that
    }
    if(string.indexOf('?') > -1){ //if string contains ?
      let instaq = string.match(/\?/g) // same stuff as ! but with ?s
      let regxq = `\\?{${instaq.length-1}}?`
  let regq = new RegExp(regxq, 'i')
  string = string.replace(regq, '')
}
  return string
}
console.log(removemarks('What went wrone???????'))
