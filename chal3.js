function isEvenOrOdd(num){
    if(num%2 == 0) return 'even' // checks if even becuase of modulus
    if(!num%2 == 0) return 'odd' //checks if odd
}
console.log(isEvenOrOdd(3))