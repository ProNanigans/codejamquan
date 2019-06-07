function mystery(num){
    let product = 1
num = num.toString().split('');//make it a string then split it up
for(let i = 0; i < num.length; i++){
    product *= num[i]
}
    return product
}
console.log(mystery(133))
