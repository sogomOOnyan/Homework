// const obj = {
//     _name: [],
//     set name(names){

//         const namesArr = names.split(', ');

//         obj._name = namesArr.map((name)=>{
//             return [name, name.length];
//         })
//     },

//     get name(){
//         return obj._name
//     }
// };

// console.log(obj.name);
// obj.name ='Vrezh, Varazdat' ;
// console.log(obj.name);
// console.log(Object.keys(obj));

/**********************************************************/

// const temperature = {
//   _celsius: null,
//   _fahrenheit: null,

//   get celsius() {
//     return temperature._celsius;
//   },

//   get fahrenheit() {
//     return temperature._fahrenheit;
//   },

//   set fahrenheit(temp) {
//     if( typeof temp === "number" && !isNaN(temp)){
//     this._fahrenheit = temp;
//     this._celsius = ((temp - 32) * 5) / 9;
//     }
//   },

//   set celsius(temp) {
//     if( typeof temp === "number" && !isNaN(temp)){
//         this._celsius = temp;
//         this._fahrenheit = (temp * 9) / 5 + 32;
//     }
//   },
// };

// Object.defineProperties(temperature, _fahrenheit,{
//     enumerable: false
// })

// temperature.celsius = 25;
// console.log(temperature.fahrenheit);


// console.log(Object.keys(temperature))

// temperature.fahrenheit = 32;
// console.log(temperature.celsius);

























const temperature = {};

// Define _celsius and _fahrenheit as non-enumerable properties
Object.defineProperty(temperature, '_celsius', {
  value: null,
  writable: true,
  enumerable: false, // Non-enumerable
  configurable: true
});

Object.defineProperty(temperature, '_fahrenheit', {
  value: null,
  writable: true,
  enumerable: false, // Non-enumerable
  configurable: true
});

// Define getters and setters for celsius and fahrenheit
Object.defineProperty(temperature, 'celsius', {
  get() {
    return this._celsius;
  },
  set(temp) {
    this._celsius = temp;
    this._fahrenheit = (temp * 9/5) + 32;
  },
  enumerable: true,
  configurable: true
});

Object.defineProperty(temperature, 'fahrenheit', {
  get() {
    return this._fahrenheit;
  },
  set(temp) {
    this._fahrenheit = temp;
    this._celsius = (temp - 32) * 5/9;
  },
  enumerable: true,
  configurable: true
});

// Usage
temperature.celsius = 25;
console.log(temperature.fahrenheit);

temperature.fahrenheit = 32;
console.log(temperature.celsius);
