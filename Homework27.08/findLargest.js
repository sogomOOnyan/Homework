let arr = [1,2,3,4,5];

function findLargest (arr){
    console.log(Math.max(...arr));
    return Math.max(...arr)
}
findLargest(arr)