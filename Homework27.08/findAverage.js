let array = [1, 2, 3, 4, 5];

function findAverage(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    console.log(average);
    return average;
}

findAverage(array)