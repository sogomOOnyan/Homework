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

/************************************* */

function Car(model, milesPerGallon) {
  let car = {
    model: model,
    milesPerGallon: milesPerGallon,
    tank: 0,
    odometer: 0,

    fill: function (gallons) {
      car.tank += gallons;
      return `Car now has ${car.tank} gallons of fuel after getting ${gallons} gallons at gas station`;
    },

    drive: function (miles) {
      if (car.tank <= 0) {
        return `Can not drive without fuel.`;
      }

      const maxMiles = car.tank * car.milesPerGallon;
      if (miles <= maxMiles) {
        car.tank -= miles / car.milesPerGallon;
        car.odometer += miles;
        return `Car drove ${miles} miles and used ${
          miles / car.milesPerGallon
        } gallon of fuel`;
      } else {
        car.odometer += maxMiles;
        car.tank = 0;
        return `Car run out of fuel at ${car.odometer} miles!`;
      }
    },
  };
  return car;
}

const honda = Car("Honda", 10);
console.log(honda.fill(50));

console.log(honda.drive(400));
console.log(honda.drive(900));
