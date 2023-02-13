'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  containerMovements.innerHTML = ' ';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((elem, i, map) => {
//   console.log(`${elem}: ${i}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach((elem, _, map) => {
//   console.log(`${elem}: ${elem}`);
// });

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(` Movement ${i + 1}: You deposited ${movement}`);
//   } else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log(`--------forEach Method--------`);
// movements.forEach((movement, i, arr) => {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, -2));

// // Splice

// console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 3));
// console.log(arr);

// // Reverse

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// console.log(arr2);
// // const arr3 = arr2.reverse();

// // Concat

// const letters = arr.concat(arr2);
// console.log(letters);

// // Join

// console.log(letters.join(' - '));

// const arr = [23, 11, 63];

// console.log(arr.at(-1));

// Code Challenge #1

const juliaArr = [3, 5, 2, 12, 7];
const kateArr = [4, 1, 15, 8, 3];

const data1 = [9, 16, 6, 8, 3];
const data2 = [10, 5, 6, 1, 4];

const checkDogs = (arr1, arr2) => {
  const juliaNew = [...arr1].splice(1, 2);
  const kateNew = [...arr2].splice(1, 2);

  juliaNew.forEach((elem, i) => {
    const type =
      elem > 0 && elem < 5
        ? 'and is still a puppy 🐶'
        : 'and is an adult but still a good boy 🐶';
    console.log(`Dog #${i + 1} is ${elem} years old, ${type}.`);
  });
  kateNew.forEach((elem, i) => {
    const type =
      elem > 0 && elem < 5
        ? 'and is still a puppy 🐶'
        : 'and is an adult but still a good boy 🐶';
    console.log(`Dog #${i + 1} is ${elem} years old, ${type}`);
  });
  console.log(juliaNew, kateNew);
  return;
};

checkDogs(juliaArr, kateArr);
checkDogs(data1, data2);
