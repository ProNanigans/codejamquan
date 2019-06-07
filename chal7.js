function email(string){
    let regx = /.*?([a-z]|[0-9]).*?@(.*?)\.(.*)/ //checks to see if there's anything first then anything from a-z or 0-9 then anything. Then there must be an @ then anything then there must be a . then anything
    string = string.match(regx) // matches to see if it exists
    if(string) return true // if so return true
    else return false // else it's fales
    return string
}
console.log(email('john.smith@email.com'))
