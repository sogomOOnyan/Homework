const firstArray = [1, 2, 3, true];
const secondArray = [2, 3, 4, true];

function findIntersection(arr1, arr2) {
    let intersection = arr1.filter(item => arr2.includes(item));
    console.log(intersection)
    return intersection;
}

findIntersection(firstArray, secondArray)