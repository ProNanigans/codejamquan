function stairs(height, block){
let stairs = [];
block = block.toString()//make sure it's a string but it doesn't have to be
for(let i = 0; i < height; i++)stairs.push([block])//getting the height of stairs down
for(let i = 0; i < height; i++){
for(let j = 0; j < stairs.indexOf(stairs[i]); j++){//pusing the index value of blocks
    stairs[i].push(block)
}
}


return stairs
}
console.log(stairs(3, 1))