const bills = [22, 292, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    let tip = bill * 0.15;
    return tip;
  } else {
    let tip = bill * 0.2;
    return tip;
  }
}

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(`Bill = $${bills[i]}, Tip = $${tips[i]}, Total = $${totals[i]}`);
}

console.log("------Bonus Challenge------");

const arr = [22, 292, 176, 440, 37, 105, 10, 1100, 86, 52];

for (let sum = 0; sum < sum.length; sum++)


//Coding Challenge #2

// const bill = 1000;

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         let tip = bill * .15;
//         return tip;
//     } else {
//         let tip = bill * .20;
//         return tip;
//     }
// }

// console.log(calcTip(bill));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// // console.log(44 * .20);

// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2] + bills[2])];
// console.log(total);

// Object Methods
// const jonas = {
//     firstName: "Jonas",
//     friends: ['Michael', 'Steve', 'Bob'],
//     age: 46,
//     job: "teacher",
//     driversLicense: false,
//     getSummary: function () {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.driversLicense ? "a" : "no"} driver's license.`
//     }
// };