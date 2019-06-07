function hackerSpeak(string){
    string = string.toLowerCase().split('');
  
    for(let i in string){
       string[i] = checkchar(string[i])
    }
  return string = string.join('')

}
   function checkchar(a){
       if(a.toLowerCase() == 'a') a = '4'
      else if(a.toLowerCase() == 's') a = '5'
      else if(a.toLowerCase() == 'i') a = '1'
      else if(a.toLowerCase() == 'o') a = '0'
     else a = a;
     return a
    }
console.log(hackerSpeak('programming is fun'))
