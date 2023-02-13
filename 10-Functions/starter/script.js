// 'use strict';

// // let bookings = [];

// // const createBooking = (
// //   flightNum = 'ARH0339',
// //   numPassengers = 1,
// //   price = '$500'
// // ) => {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   return bookings.push(booking);
// // };

// // createBooking('AR4550', 3, '$1000');

// // const flight = 'LH23243';
// // const usama = {
// //   name: 'Muhammad Usama',
// //   passport: 2112316,
// // };

// // const checkIn = (flightNum, passenger) => {
// //   flightNum = 'LH222';
// //   passenger.name = 'Mr. ' + passenger.name;

// //   if (passenger.passport === 2112316) {
// //     alert('Check in');
// //   } else {
// //     alert('Wrong passport');
// //   }
// // };

// // // checkIn(flight, usama);
// // // console.log(flight);
// // // console.log(usama);

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 10000000);
// // };

// // newPassport(usama);

// // checkIn(flight, usama);

// // const oneWord = str => {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = str => {
// //   const [first, ...other] = str.split(' ');
// //   return [first.toUpperCase(), ...other].join(' ');
// // };

// // Higher Order Function
// // const transformer = (str, fn) => {
// //   console.log(`Original String: ${str}`);
// //   console.log(`Transformed string ${fn(str)}`);
// //   console.log(`Transformed by: ${fn.name}`);
// // };

// // transformer('Javascript is the best!', upperFirstWord);
// // transformer('Javascript is the best!', oneWord);

// // const high5 = function () {
// //   console.log('👋');
// // };

// // document.body.addEventListener('click', high5);

// // ['jonas', 'martha', 'adam'].forEach(high5);

// // const scrambler = number => {
// //   const str = number.toString();
// //   const numScramle = str.slice(-4);
// //   return numScramle.padStart(str.length, '*');
// // };

// // const numberHider = (number, fn) => {
// //   console.log(`The original number is ${number}`);
// //   console.log(
// //     `The scrambled number after function application is ${fn(number)}`
// //   );
// //   return;
// // };

// // numberHider('4119900959968559', scrambler);

// // const greet = greeting => {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greet = greeting => name => {
// //   console.log(`${greeting} ${name}`);
// // };

// // const greeterHey = greet('Hey');

// // greeterHey('Usama');
// // greeterHey('Arhama');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} on ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Airlines ',
//   iataCode: 'SW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //Wont work
// // book(23, 'Huma Naz');

// // Call Method
// // book.call(eurowings, 23, 'Huma Naz');
// // console.log(eurowings);

// // book.call(lufthansa, 567, 'Muhammad Yaseen');
// // console.log(lufthansa);

// // book.call(swiss, 567, 'Bruce Wayne');
// // console.log(swiss);

// // Apply Method

// // const flightData = [567, 'Muhammad Usama'];

// // book.apply(swiss, flightData);

// // book.call(swiss, ...flightData);
// // console.log(swiss);

// // Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookSW = book.bind(swiss);

// bookEW(456, 'Muhammad Yaseen');
// bookSW(459, 'Huma Naz');
// bookLH(454, 'Arhama Yaseen');

// // console.log(eurowings);
// // console.log(swiss);
// // console.log(lufthansa);

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('button.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(200));

// const addTaxRate = rate => {
//   value => value + value * rate;
// };

// const addVAT2 = addTaxRate(0.23);

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let [jScore, pScore, rScore, cScore] = [0, 0, 0, 0];
//     let selection;
//     let res = prompt(this.question + ' ' + this.options);
//     switch (res) {
//       case this.options[0]:
//         jScore++;
//         break;
//       case this.options[1]:
//         pScore++;
//         break;
//       case this.options[2]:
//         rScore++;
//         break;
//       case this.options[3]:
//         cScore++;
//         break;
//       default:
//         alert('Need to submit a response before submitting.');
//     }
//     console.log(jScore);
//   },
// };

// document.querySelector('button.poll').addEventListener('click', () => {
//   poll.registerNewAnswer();
// });

// const runOnce = () => {
//   console.log('This will never run again');
// };

// runOnce();

// // Immediately Invoked Function Expression
// (function () {
//   console.log('This will never run again');
// })();

// (() => {
//   console.log('This will never run again!!');
// })();

// const secureBooking = () => {
//   let passengerCount = 0;

//   return () => {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 80;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//

h();
f();
