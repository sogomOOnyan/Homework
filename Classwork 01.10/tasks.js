function isGladioulus(arr, perimeter, top, left){
    let count = 0;
    for(let i = top; i < top + perimeter; i++){
        for(let j = left;  j < left + perimeter; j++){
            if(( i === top || i === top + perimeter -1) || (j ===  left || j === left + perimeter - 1)){
                if (arr[i][j] !== 9) count ++
        }
    }
}
    if (count === 0) return `All flowers are right`
    else return `${count} flowers are wrong from`
}

let arr = [
    [8, 9, 9, 9],
    [8, 9, 4, 9],
    [1, 9, 9, 9],
    [1, 2, 9, 9]
]

console.log(isGladioulus(arr, 3, 0, 0))