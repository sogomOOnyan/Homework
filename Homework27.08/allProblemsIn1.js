// let arr = [1,2,3,4,5];

// function findLargest (arr){
//     console.log(Math.max(...arr));
//     return Math.max(...arr)
// }
// findLargest(arr)


/****************************************************/

// function countVowels (string) {
//     let count = 0;
//     let newString = string.toLowerCase();
//     for (let i = 0; i < newString.length; i++) {
//         if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
//             count++;
//         }
//     }
//     console.log(count);
//     return count;
// }

// countVowels('aaa')

/****************************************************/

// let array = [1, 2, 3, 4, 5];

// function sumArray(arr = []){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     console.log(sum);
//     return sum;
// }
// sumArray(array);

/****************************************************/

// function reverseString(string){
//     let newString = string.split('').reverse().join('');
//     console.log(newString);
//     return newString;
// }

// reverseString("abcd")

/****************************************************/

// function isPrime (num) {
//     let flag = false;
//     for(let i = 2; i <= num/2; i++){
//         if(num % i === 0){
//             flag = true;
//             console.log(false);
//             return false;
//         }
//     }
//     console.log(true);
//     return true;
// }

// isPrime(10)

/****************************************************/

// let array = [1, 2, 3, 4, 5];

// function findAverage(arr = []) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let average = sum / arr.length;
//     console.log(average);
//     return average;
// }

// findAverage(array)

/****************************************************/

// function generateFibonacci(limit) {
//     let fibonacciFirst = 0;
//     let fibonacciSecond = 1;
//     let fibonacciArray = [fibonacciFirst, fibonacciSecond];
//     while (fibonacciFirst + fibonacciSecond <= limit) {
//         let nextFibonacci = fibonacciFirst + fibonacciSecond;
//         fibonacciArray.push(nextFibonacci);
//         fibonacciFirst = fibonacciSecond;
//         fibonacciSecond = nextFibonacci;
//     }
//     console.log(fibonacciArray);
//     return fibonacciArray;
// }

// generateFibonacci(15);

/****************************************************/

// function findLongestWord(string) {
//     let words = string.split(' ');
//     let longestWord = words[0];
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     console.log(longestWord);
//     return longestWord;
// }

// findLongestWord("a bc defg")

/****************************************************/

// function isPalindrome(string) {
//     let copyString = string.toLowerCase();
//     let filteredString = '';

//     for (let char of copyString) {
//         if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
//             filteredString += char;
//         }
//     }
//     let reversedString = filteredString.split('').reverse().join('');

//     if (filteredString === reversedString) {
//         console.log(true);
//         return true;
//     } else {
//         console.log(false);
//         return false;
//     }
// }

// isPalindrome("A man, a plan, a canal, Panama");

/****************************************************/

// function capitalizeWords(string) {
//     let words = string.split(' ');

//     let capitalizedWords = words.map(word => {
//         if (word.length > 0) {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//         return word;
//     });

//     return capitalizedWords.join(' ');
// }

// console.log(capitalizeWords("hello world")); 

/****************************************************/

// let itemArr = [1, 2, 3, 2, 2, 2, 2, 1];

// function mostFrequentItem(arr = []){
//     let frequencyMap = {
//     };
//     for(let i = 0; i < arr.length; i++){
//         if( !frequencyMap[`${arr[i]}`]){
//             frequencyMap[`${arr[i]}`] = 1;
//         } else {
//             frequencyMap[`${arr[i]}`] += 1;
//         }
//     }
//     let frequency = Object.values(frequencyMap);
//     let mostFrequentItem = Math.max(...frequency);

//     let mostFrequentItemValue = Object.keys(frequencyMap).find(key => frequencyMap[key] === mostFrequentItem);

//         console.log(mostFrequentItemValue);
//         return mostFrequentItemValue;

// }

// mostFrequentItem(itemArr)

/****************************************************/

// let personArr = [
//     { name: 'John', age: 20 },
//     { name: 'Jane', age: 30 },
//     { name: 'John', age: 25 },
// ]

// function sortObjects(arr, property) {
//     let newArr = arr.sort((a, b) => {
//         if (a[property] < b[property]) {
//             return -1;
//         }
//         if (a[property] > b[property]) {
//             return 1;
//         }
//         return 0;
//     })

//     console.log(newArr);
//     return newArr;
// }

// sortObjects(personArr, 'age')

/****************************************************/

// const firstArray = [1, 2, 3, true];
// const secondArray = [2, 3, 4, true];

// function findIntersection(arr1, arr2) {
//     let intersection = arr1.filter(item => arr2.includes(item));
//     console.log(intersection)
//     return intersection;
// }

// findIntersection(firstArray, secondArray)

/****************************************************/

// const nestedArray = [1, [2, [3, [4, 5]]]];
// const flattenedArray = nestedArray.flat(Infinity); 
// console.log(flattenedArray);


// function flattenArray(arr) {
//     return arr.reduce((acc, item) => 
//       acc.concat(Array.isArray(item) ? flattenArray(item) : item), []);
//   }
  
// const nestedArray = [1, [2, [3, [4, 5, [6, [7, [8]]]]]]];



// const flatArray = flattenArray(nestedArray);
// console.log(flatArray)

/****************************************************/
