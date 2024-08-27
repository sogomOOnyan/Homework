function flattenArray(arr) {
    return arr.reduce((acc, item) => 
      acc.concat(Array.isArray(item) ? flattenArray(item) : item), []);
  }
  
const nestedArray = [1, [2, [3, [4, 5, [6, [7, [8]]]]]]];



const flatArray = flattenArray(nestedArray);
console.log(flatArray)