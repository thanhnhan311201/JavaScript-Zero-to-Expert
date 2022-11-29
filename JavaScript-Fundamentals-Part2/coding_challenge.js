/////////////////////////////////////////
// Coding Challenge #1
// TEST DATA 1
// const fisrtDolphinsScore = 44;
// const secondDolphinsScore = 23;
// const thirdDolphinsScore = 71;

// const firstKoalasScore = 65;
// const secondKoalasScore = 54;
// const thirdKoalasScore = 49;

// TEST DATA 2
// const fisrtDolphinsScore = 85;
// const secondDolphinsScore = 54;
// const thirdDolphinsScore = 41;

// const firstKoalasScore = 23;
// const secondKoalasScore = 34;
// const thirdKoalasScore = 27;

// // Function
// const calcAverage = (firstScore, secondScore, thirdScore) =>
//   (firstScore + secondScore + thirdScore) / 3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(
//       `Dolphins win 🏆 (${Math.round(avgDolphins)} vs. ${Math.round(
//         avgKoalas
//       )})`
//     );
//     return avgDolphins;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(
//       `Koalas win 🏆 (${Math.round(avgKoalas)} vs. ${Math.round(avgDolphins)})`
//     );
//     return avgKoalas;
//   } else {
//     console.log("No team wins...");
//     return -1;
//   }
// };

// const avgDolphins = calcAverage(
//   fisrtDolphinsScore,
//   secondDolphinsScore,
//   thirdDolphinsScore
// );
// const avgKoalas = calcAverage(
//   firstKoalasScore,
//   secondKoalasScore,
//   thirdKoalasScore
// );

// checkWinner(avgDolphins, avgKoalas);

/////////////////////////////////////////
// Coding Challenge #2
// const caclTip = (bill) =>
//   bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [caclTip(bills[0]), caclTip(bills[1]), caclTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(totals);

/////////////////////////////////////////
// Coding Challenge #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / Math.pow(this.height, 2);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / Math.pow(this.height, 2);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(
//   `${
//     mark.bmi > john.bmi
//       ? `${mark.fullName}'s BMI (${mark.bmi})`
//       : `${john.fullName}'s BMI (${john.bmi})`
//   } is higher than ${
//     mark.bmi < john.bmi
//       ? `${mark.fullName}'s BMI (${mark.bmi})`
//       : `${john.fullName}'s BMI (${john.bmi})`
//   }`
// );

/////////////////////////////////////////
// Coding Challenge #4
const caclTip = (bill) =>
  bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const calcAverage = (arr) => {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }

  return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let bill of bills) {
  const tip = caclTip(bill);
  tips.push(tip);
  totals.push(tip + bill);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(tips));
console.log(calcAverage(totals));
