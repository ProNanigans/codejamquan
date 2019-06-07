function sumsmall(arr){
    let lowest2 = []
    for(let i = 0; i < 2; i++){ //does twice
        let min = Math.min(...arr); //gets the lowest value in the arr
        lowest2.push(min) // pushes it into another arr
        arr.splice(arr.indexOf(min), 1); //removes the min from arr
    }
    let sum = lowest2[0] + lowest2[1]  // adds the lowest 2 together
        return sum
    }
    console.log(sumsmall([4,3,2,1]))
