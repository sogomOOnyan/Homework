// function Baby(name, age, favoriteToy){
//     this.name = name;
//     this.age = age;
//     this.favoriteToy = favoriteToy;
//     this.play = function (){
//         return `${this.name} is playing with ${this.favoriteToy}`
//     }
// }

// const baby = new Baby('Baby', 1, 'Toy');
// console.log(baby.play());

/************************************** */

function Baby(name, age, favoriteToy) {
  let baby = {
    name: name,
    age: age,
    favoriteToy: favoriteToy,
    play: function () {
      return `${baby.name} is playing with ${baby.favoriteToy}`;
    },
  };
  return baby;
}

const baby = Baby("Baby", 1, "Toy");
console.log(baby.play());
