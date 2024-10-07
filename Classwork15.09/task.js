// function reverseString(s){
//     try{
//         return s.split("").reverse().join("");
//     } catch{
//         return `Error: ${s} is invalid input`;
//     }
// }
// let arr = ['a', 'b']
// console.log(reverseString(arr))

/**************************************************/

// function isPositive(num){
//     try{
//         if(num > 0){
//             return 'YES'
//         } else throw new Error('Error')
//     }catch {
//         if ( num === 0){
//             return 'Zero Error'
//         } else return 'Negative Error'
//     }
// }
// console.log(isPositive(-1));

/**************************************************/

//Inital Code

function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}

// Converted Code

function reverseString(s) {
  try {
    if (typeof s !== "string") {
      throw new Error("Error: s.split is not a function");
    }
    return s.split("").reverse().join("");
  } catch(error) {
    return error.message;
  }
}

console.log(reverseString("Hello World"));
console.log(reverseString(123)); 

/**************************************************/

/**************************************************/
