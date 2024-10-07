// function sumFunc(num = 0) {
//   if (typeof num !== "number") {
//     return "invalid input";
//   }
//   return function (num2) {
//     if (typeof num2 !== "number") {
//       return "invalid input";
//     }
//     return num + num2;
//   };
// }

// const addOne = sumFunc(1);
// const addTwo = sumFunc(2);
// const addTen = sumFunc(10);

// console.log(sumFunc(1)(2));

/******************************************************** */

// function isValidString(word){
//     if (typeof word !== "string") {
//       return false;
// }
//     let arrayWord = word.split();
//     for( let char of word){
//         if( char >= 'z' || char <= 'A' ){
//             return false
//         }
//     }
//     return true
// };

// function add_suffix(suffix){
//     return function(word) {
//         if (isValidString(word)) {
//             return word + suffix;
//         }else return 'Invalid Input'
//     }
// }

// const add_ly = add_suffix('ly')
// const add_less = add_suffix('less')
// console.log(add_ly('beautiful3213213'))
// console.log(add_less('hope'))

/******************************************************** */

// function isValidString(word) {
//   if (typeof word !== "string") {
//     return false;
//   }
//   let arrayWord = word.split();
//   for (let char of word) {
//     if (char >= "z" || char <= "A") {
//       return false;
//     }
//   }
//   return true;
// }

// function isIsogram(word) {
//   const letterObj = {};
//   const lowerCaseWord = word.toLowerCase();
//   if (isValidString(word)) {
//     for (let char of lowerCaseWord) {
//       if (letterObj[char]) {
//         return false;
//       }
//       letterObj[char] = true
//     } return true
//   } else return "Invalid Input";
// }
// console.log(isIsogram('abcd'));

/******************************************************** */

// let array = [
//   [1, 2, 3],
//   [4, 9, 16],
//   [25, 36, 49],
// ];

// function isSquare(num){
//     return Math.sqrt(num) === Math.floor(Math.sqrt(num))
// }

// function getCountOfSquares(arr){
//     let resArr = []
//     for(let i = 0; i < arr.length; i++){
//         let count = 0;
//         for(let j = 0; j < arr[i].length; j++) {
//             if(isSquare(arr[i][j])){
//                 count++
//             }
//         }
//         resArr.push(count)
//     }
//     return resArr
// }

// console.log(getCountOfSquares(array));

/******************************************************** */

let array = [
    [1, 3, 5],
    [2, 4, 6],
    [7, 9, 11]
]

function transformArray(arr = []){
    return arr.map( subArr =>{
            let maxInt = Math.max(...subArr)
            return subArr.map(el => el+=maxInt)
    })
}

console.log(transformArray(array));

// let array = [
//     [1, 3, 5],
//     [2, 4, 6],
//     [7, 9, 11]
// ]

// function transformArray(arr = []){
//     return arr.map(subArray => {
//         const maxInt = Math.max(...subArray);
//         return subArray.map(el => el + maxInt);
//     });
// }

// console.log(transformArray(array));

/******************************************************** */



/******************************************************** */



/******************************************************** */



/******************************************************** */



/******************************************************** */