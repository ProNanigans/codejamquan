function asciiCapitalize(string){
    string = string.split(''); // splits the string into their own characters
    for(let i in string){ // a loop that loops string.length times
        if(string[i].charCodeAt()%2 == 0){ // gets the ascii code and checks if it is even
            string[i] = string[i].toUpperCase()// if it is then upper case it
        }
    }
    return string.join('') //finally join it together
}
console.log(asciiCapitalize('to be or not to be')) // input
