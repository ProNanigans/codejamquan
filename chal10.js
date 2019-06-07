function sorting(arr){
    arr.sort(function(a, b){//sorts it by descending order
        return b-a
    });
    for(let i in arr){
      arr[i] = arr[i].toString()// makes each element in arr into a string to compare lengths
    }
    arr.sort(function(a,b){//compares length of each element
       if(a.length == b.length){ // if they equal each other
        return a-b // go into ascending order
      }
    })
    return arr
}
console.log(sorting([77,23,5,7,101]))//input
