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
    <div class="movements__value">${mov}€</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, elem) => acc + elem, 0);
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, elem) => acc + elem, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => {
      return int >= 1;
    })
    .reduce((acc, elem) => acc + elem, 0);

  labelSumInterest.textContent = `${interest}€`;
};

// Function for updating usernames
const createUsername = accounts => {
  accounts.forEach(
    accounts =>
      (accounts.username = accounts.owner
        .toLowerCase()
        .split(' ')
        .map(x => x[0])
        .join(''))
  );
};

createUsername(accounts);

// Function for updating user interface
const userInterface = acc => {
  displayMovements(acc.movements),
    calcDisplayBalance(acc),
    calcDisplaySummary(acc);
};

// Event Handler
let currAccount;

btnLogin.addEventListener('click', event => {
  //Prevent form from submitting
  event.preventDefault();
  currAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currAccount);
  if (currAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // Display UI & Welcome Message
    console.log(
      (labelWelcome.textContent = `Welcome Back, ${
        currAccount.owner.split(' ')[0]
      }`)
    );
    containerApp.style.opacity = 100;
    userInterface(currAccount);
  }
});

// Transfer money
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currAccount.balance >= amount &&
    receiverAcc?.username !== currAccount.username
  ) {
    currAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    userInterface(currAccount);
  }
});

// Close Account

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currAccount.username &&
    Number(inputClosePin.value) === currAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currAccount.username
    );
    // Delete Account
    accounts.splice(index, 1);
    // Hide UI after deletion
    containerApp.style.opacity = 0;

    // Reset Welcome Message
    labelWelcome.textContent = 'Log in to get started';

    inputCloseUsername.value = inputClosePin = '';
  }
});

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits.sort().reverse());

// const withdrawals = movements.filter(x => x < 0);

// console.log(withdrawals.sort());

// accumulator (acc) collects all the elements in the array

const balance = movements.reduce((acc, elem, i, arr) => {
  // console.log(
  //   `Iteration: ${
  //     i + 1
  //   } | Accumulate: ${acc} | Current Element: ${elem} | Sum after Accumulation ${
  //     acc + elem
  //   }`
  // );
  return acc + elem;
}, 0);

// console.log(balance);

// let sum = 0;
// for (const mov of movements) sum += mov;
// console.log(sum);

// Maximum Value

const max = movements.reduce((acc, elem) => {
  if (acc > elem) {
    return acc;
  } else return elem;
}, movements[0]);

// Minimum Value

const min = movements.reduce((acc, elem) => {
  if (acc < elem) {
    return acc;
  } else return elem;
}, movements[0]);

// console.log(min);

// Max and Min through traditional looping

// let max = 0;
// console.log(max);
// for (let i = 0; i < movements.length; i++) {
//   if (movements[i] > max) {
//     max = movements[i];

//     // } else if (movements[i] < max) {
//     // max = movements[i];
//   }
// }
// let min = 0;
// for (let i = 0; i < movements.length; i++) {
//   if (movements[i] < min) {
//     min = movements[i];

//     // } else if (movements[i] < max) {
//     // max = movements[i];
//   }
// }
// console.log(min);

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

const eurtoUsd = 1.1;

// const usdConversion = movements.map(mov => mov * eurtoUsd);

// console.log(movements);
// console.log(usdConversion);

// const movementsUSD = [];
// for (const mov of movements) {
//   movementsUSD.push(mov * eurtoUsd);
// }
// console.log(movementsUSD);

// const movDesc = movements.map((mov, i) => {
//   const type =
//     mov > 0
//       ? `Movement ${i + 1}: You deposited ${mov}`
//       : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   return type;
// });

// console.log(movDesc.toString().split(',').join('\n'));

// Code Challenge #1

// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];

// const data1 = [9, 16, 6, 8, 3];
// const data2 = [10, 5, 6, 1, 4];

// const checkDogs = (arr1, arr2) => {
//   const juliaNew = [...arr1].splice(1, 2);
//   const kateNew = [...arr2].splice(1, 2);

//   juliaNew.forEach((elem, i) => {
//     const type =
//       elem > 0 && elem < 5
//         ? 'and is still a puppy 🐶'
//         : 'and is an adult but still a good boy 🐶';
//     console.log(`Dog #${i + 1} is ${elem} years old, ${type}.`);
//   });
//   kateNew.forEach((elem, i) => {
//     const type =
//       elem > 0 && elem < 5
//         ? 'and is still a puppy 🐶'
//         : 'and is an adult but still a good boy 🐶';
//     console.log(`Dog #${i + 1} is ${elem} years old, ${type}`);
//   });
//   console.log(juliaNew, kateNew);
//   return;
// };

// checkDogs(juliaArr, kateArr);
// checkDogs(data1, data2);

// Coding Challenge #2

// const calcAverageHumanAge = arr => {
//   let result = 0;
//   let filteredAge = [];
//   const humanAge = arr
//     .map(x => (x <= 2 ? (result = 2 * x) : (result = x * 4 + 16)))
//     .filter(x => (x > 18 ? filteredAge.push(x) : ''));

//   filteredAge = filteredAge.reduce((v, x, y, z) => {
//     return v + x / z.length;
//   }, 0);
//   //dog <= 2, humanAge = 2 * dogAge
//   // dog > 2, humanAge = 16 + dogAge * 4
//   return filteredAge;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const test = [36, 32, 76, 48, 28].reduce((x, y, z = null, b) => {
//   // console.log(x, y, b.length);
//   return x + y / b.length;
// }, 0);
// console.log(test);

// const arr = [36, 32, 76, 48, 28];

// let sum = 0;
// for (let x of arr) {
//   sum += x / arr.length;
// }
// console.log(sum);

// Chaining Methods

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurtoUsd)
//   .reduce((acc, mov) => {
//     return acc + mov;
//   }, 0);
// // console.log(totalDepositsUSD);

// const findMethod = movements.find(mov => mov < 0);

// // console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);
