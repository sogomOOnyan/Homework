let array = [1, 2, 3, 4, 5];

function sumArray(arr = []){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
    return sum;
}
sumArray(array);