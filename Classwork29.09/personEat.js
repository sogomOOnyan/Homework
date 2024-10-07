//using 'this'

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//     this.eat = function(food){
//         if(edible(food) && this.stomach.length < 10)this.stomach.push(food)
//     }
//     this.poop = function(){
//         this.stomach = []
//     }
//     this.toString = function(){
//         return `${this.name}, ${this.age}`
//     }
// }

// function edible(food){
//     if(food === "apple" || food === "banana" || food === "cherry" || food === "meat") return true
//     else return false
// }
// const p1 = new  Person("Samuel", 24)

// console.log(p1.stomach);

/******************************************* */

//using prototype
function Person(name, age) {
  let person = {
    name: name,
    age: age,
    stomach: [],
    eat: function (food) {
      if (edible(food) && person.stomach.length < 10) person.stomach.push(food);
    },
    poop: function () {
      person.stomach = [];
    },
    toString: function () {
      return `${person.name}, ${person.age}`;
    },
  };
  return person;
}

function edible(food) {
  if (
    food === "apple" ||
    food === "banana" ||
    food === "cherry" ||
    food === "meat"
  )
    return true;
  else return false;
}

const p1 = Person("Samuel", 24);

console.log(p1.stomach);
