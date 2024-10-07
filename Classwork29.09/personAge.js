// using 'this'

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.compareAge = function(secondPerson){
//         if(secondPerson.age < age) return `${this.name} is older than ${secondPerson.name}`
//         else if(secondPerson.age > this.age) return `${this.name} is younger than ${secondPerson.name}`
//         else if(secondPerson.age === this.age) return `${this.name} is the same age as ${secondPerson.name}`
//         // console.log(ageCompareTo, age)
//     }
// }

// const p1 = new Person("Samuel", 24)
// const p2 = new Person("Joel", 36)
// const p3 = new Person("Lily", 24)
// console.log(p1.compareAge(p2))
// console.log(p2.compareAge(p1))
// console.log(p1.compareAge(p3))

/*************************************** */

//using prototype

function Person(name, age) {
  let person = {
    name: name,
    age: age,
    compareAge: function (secondPerson) {
      if (secondPerson.age < person.age)
        return `${person.name} is older than ${secondPerson.name}`;
      else if (secondPerson.age > person.age)
        return `${person.name} is younger than ${secondPerson.name}`;
      else if (secondPerson.age === person.age)
        return `${person.name} is the same age as ${secondPerson.name}`;
    },
  };
  return person;
}

const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));
