let personArr = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'John', age: 25 },
]

function sortObjects(arr, property) {
    let newArr = arr.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    })

    console.log(newArr);
    return newArr;
}

sortObjects(personArr, 'age')