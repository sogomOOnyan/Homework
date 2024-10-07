

function Calculator () {
   this.add = function(num1, num2){
        return num1 + num2
    };
    this.subtract = function(num1, num2){
        return num1 - num2
    },
    this.multiply = function(num1, num2){
        return num1 * num2
    },
    this.divide = function(num1, num2){
        if(num2 != 0) return num1 / num2
        else  return "Error"
    }
}

const calc = new Calculator()

console.log(calc.subtract(10, 5))


/************************************************************* */

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
// console.log(p1.compareAge(p2)) // "Joel is older than me."
// console.log(p2.compareAge(p1)) // "Samuel is younger than me."
// console.log(p1.compareAge(p3)) // "Lily is the same age as me."

/************************************************************* */

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

/************************************************************* */

// function Car(model, milesPerGallon) {
//     this.model = model;
//     this.milesPerGallon = milesPerGallon;
//     this.tank = 0;
//     this.odometer = 0;
  
//     this.fill = function(gallons) {
//       this.tank += gallons;
//       return `Car now has ${this.tank} gallons of fuel after getting ${gallons} gallons at gas station`
//     };
  
//     this.drive = function(miles) {
//       if (this.tank <= 0) {
//         return `Can not drive without fuel.`;
//       }
  
//       const maxMiles = this.tank * this.milesPerGallon;
//       if (miles <= maxMiles) {
//         this.tank -= miles / this.milesPerGallon;
//         this.odometer += miles;
//         return `Car drove ${miles} miles and used ${miles / milesPerGallon} gallon of fuel`
//       } else {
//         this.odometer += maxMiles;
//         this.tank = 0;
//         return `Car run out of fuel at ${this.odometer} miles!`;
//       }
//     };
//   }
  
//   const honda = new Car('Honda', 10);
//   console.log(honda.fill(50));
  
//   console.log(honda.drive(400));
//   console.log(honda.drive(900))

/************************************************************* */
  
// function Baby(name, age, favoriteToy){
//     this.name = name;
//     this.age = age;
//     this.favoriteToy = favoriteToy;
//     this.play = function (){
//         return `${this.name} is playing with ${this.favoriteToy}`
//     }
// }

// const baby = new Baby('Baby', 1, 'Toy');
// console.log(baby.play()); // Output: Baby is playing with Toy

/************************************************************* */

function Playlist(){
    this.songs = [];
    this.isPlaying = false;
    this.indexOfSong = 0
    this.add = function(songObj){
        this.songs.push(songObj);
        return `${songObj.title} by ${songObj.artist} has been added to the playlist`
    }
    this.play = function(){
        this.isPlaying = true;
        return `${this.songs[this.indexOfSong].title} Started by ${this.songs[this.indexOfSong].artist}`
    }
    this.next = function(){
        if (this.indexOfSong < this.songs.length - 1) {
            this.indexOfSong += 1
            return `Next Song: ${this.songs[this.indexOfSong].title} by ${this.songs[this.indexOfSong].artist}`
        } else {
            return `No more songs in the playlist, playing the first song:  ${this.songs[0].song} by ${this.songs.artist}`
        }
    }
    this.stop = function() {
        this.isPlaying = false;
        return `${this.songs[this.indexOfSong].title} by ${this.songs[this.indexOfSong].artist} stopped`
    }
}
function Song(title, artist){
    this.title = title;
    this.artist = artist;
}

const  song1 = new Song('Song1', 'Artist1');
const song2 = new Song('Song2', 'Artist2');
const song3 = new Song('Song3', 'Artist3');
const playlist = new Playlist();
console.log(playlist.add(song1));
console.log(playlist.add(song2));
console.log(playlist.add(song3));
console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.stop());
console.log(playlist);
// console.log(playlist.play()); // Output: Song1 Started by Artist1


//add, play, next, stop