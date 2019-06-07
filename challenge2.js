function nextEdge(firstS, secondS){
    let thirdS = (firstS + secondS) -1//adds first side and second side then subtracts one because the largest triangle side can't be longer than the sum of the two other sides.
    return thirdS
}
console.log(nextEdge(8, 10))
