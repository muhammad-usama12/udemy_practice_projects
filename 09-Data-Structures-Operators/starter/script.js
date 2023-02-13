'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const fixCode = x => {
  return x.slice(0, 3).toUpperCase();
};

const fixedStr = flights.split('+');

for (const flight of fixedStr) {
  const [stat, from, to, time] = flight.split(';');
  const output = `${stat.startsWith('_Delayed') ? '🛑' : ''}${stat.replaceAll(
    '_',
    ' '
  )} ${fixCode(from)} from ${fixCode(to)} to (${time.replaceAll(
    ':',
    'h'
  )})`.padStart(43);
  console.log(output);
}

// Data needed for first part of the section
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const airline = 'Air Canada';
// console.log(airline.slice(0, 4));
// console.log(airline.slice(4));
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'UsAMA'; //Usama
// const passengerLower = passenger.toLowerCase();
// const fix = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(fix);

// const fixCap = name => {
//   const nameLower = name.toLowerCase();
//   let fix = '';
//   if (nameLower[0].toUpperCase()) {
//     fix = nameLower[0].toUpperCase() + nameLower.slice(1);
//   } else {
//     fix = nameLower[0].toLowerCase() + nameLower.slice(1);
//   }
//   console.log(fix);
//   return fix;
// };

// fixCap('YaSEEn');
// fixCap('aaYAN');

//Comparing Emails

// const email = 'hello@usama.io';
// const loginEmail = ' Hello@usama.Io \n';

// const lower = loginEmail.toLowerCase();
// const trimedEmail = lower.trim();
// console.log(trimedEmail);

// const normailzedEmail = loginEmail.toLowerCase().trim();
// console.log(normailzedEmail);

// console.log(email === normailzedEmail);

// const emailChecker = (x, y) => {
//   if (x === y) {
//     console.log(`${x} email matches the email in the database`);
//   } else {
//     console.log(
//       `${y} is incorrect. Please try again with the right email address`
//     );
//   }
//   return;
// };

// emailChecker(email, normailzedEmail);

// Replace parts of strings

// const priceGB = '288,97£';
// const priceUSD = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUSD);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replaceAll('door', 'gate'));

// Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith());

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new airbus family');
// }

//Practice

// const checkBaggage = function (items) {
//   //check baggage
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(
//       "You can't board the flight because you have a unsafe objects in your bag."
//     );
//   } else {
//     console.log('Your baggage items are safe for boarding. Enjoy the flight.');
//   }
//   return;
// };

// checkBaggage('I have a laptop, some Food and a Pocket knife');
// checkBaggage('I have a phone and a camera');
// checkBaggage('I have a gun and some snacks');

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`${seat} is a middle seat`);
//   } else console.log(`${seat} is not a middle seat`);
//   return;
//   // B and E are middle seats
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Split and Join

// console.log('a+very+nice+string'.split('+'));
// console.log('Muhammad Usama'.split(' '));

// const [firstName, lastName] = 'Muhammad Usama'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger = 'jessica ann smith davis';

// const capitalizeName = name => {
//   let newName = [];
//   const cap = name.split(' ');
//   for (const word of cap) {
//     //   newName.push(word[0].toUpperCase() + word.slice(1));
//     // }
//     newName.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(newName.join(' '));
//   return newName.toString();
// };

// capitalizeName(passenger);
// capitalizeName('muhammad usama');

// Padding

// const message = 'Go to gate 23!';
// console.log(message.padStart(16, '+ ').padEnd(18, ' +'));
// console.log(message.padStart(16, '+ '));

// const mask = number => {
//   const string = number.toString();
//   const last = string.slice(-4);
//   return last.padStart(string.length, '*');
// };

// console.log(mask(4336998445666));
// console.log(mask('4336998445666699'));

// Repeat

// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const planeInLine = x => {
//   console.log(`There are ${x} planes in line ${'🛩️'.repeat(x)}`);
// };

// planeInLine(5);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// console.log(restaurant.openingHours.mon?.open);

// const days = new Array('mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun');

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Usama', email: 'musama@hotmail.com' }];

// const arr = [{ first: 1, second: 2, fourth: 4 }];

// console.log(arr[0]?.second ?? 'third is not in the array');

// const properties = Object.keys(openingHours);
// // console.log(properties);

// for (const day of Object.keys(openingHours)) {
//   // console.log(day);
// }

// const values = Object.values(openingHours);
// // console.log(values);

// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   scorers: { Gnarby: 1, Hummels: 1, Lewandowski: 2 },
// };
// let score = 1;
// const scored = game.scored;
// for (const player of scored) {
//   console.log(`Goal ${score++}: ${player}`);
// }

// const { team1, x, team2 } = game.odds;
// console.log(`Odd of victory ${game.team1}: ${team1}`);
// console.log(`Odd of draw: ${x}`);
// console.log(`Odd of victory ${game.team2}: ${team2}`);

// const avg = (team1 + team2 + x) / 3;

// const rest = new Map();
// rest.set('name', 'Pizza Pizza');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// rest
//   .set('categories', [['Italian', 'Pizzeria', 'Vegetarian', 'Organic']])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// const time = 7;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);
