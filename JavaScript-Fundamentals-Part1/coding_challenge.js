/////////////////////////////////////////
// Coding Challenge #1
// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Mark's BMI: " + BMIMark);
// console.log("John's BMI: " + BMIJohn);
// console.log("Is Mark's BMI higher than John's BMI: " + markHigherBMI);

/////////////////////////////////////////
// Coding Challenge #2
// if (markHigherBMI) {
//   console.log(
//     `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
//   );
// }

/////////////////////////////////////////
// Coding Challenge #3
// TEST DATA
// const fisrtDolphinsScore = 96;
// const secondDolphinsScore = 108;
// const thirdDolphinsScore = 89;

// const firstKoalasScore = 88;
// const secondKoalasScore = 91;
// const thirdKoalasScore = 110;

// TEST DATA BONUS 1
// const fisrtDolphinsScore = 97;
// const secondDolphinsScore = 112;
// const thirdDolphinsScore = 101;

// const firstKoalasScore = 109;
// const secondKoalasScore = 95;
// const thirdKoalasScore = 123;

// TEST DATA BONUS 2
// const fisrtDolphinsScore = 97;
// const secondDolphinsScore = 112;
// const thirdDolphinsScore = 101;

// const firstKoalasScore = 109;
// const secondKoalasScore = 95;
// const thirdKoalasScore = 106;

// const averageDolphinsScore =
//   (fisrtDolphinsScore + secondDolphinsScore + thirdDolphinsScore) / 3;
// const averageKoalasScore =
//   (firstKoalasScore + secondKoalasScore + thirdKoalasScore) / 3;

// if (averageDolphinsScore >= 100 && averageKoalasScore >= 100) {
//   if (averageDolphinsScore > averageKoalasScore)
//     console.log(
//       `Dolphins win the trophy 🏆 with average score of ${averageDolphinsScore}`
//     );
//   else if (averageDolphinsScore < averageKoalasScore)
//     console.log(
//       `Koaslas win the trophy 🏆 with average score of ${averageKoalasScore}`
//     );
//   else
//     console.log(
//       `Both win the trophy 🏆 with average score of ${averageKoalasScore}`
//     );
// } else console.log("No team wins the trophy!");

/////////////////////////////////////////
// Coding Challenge #4
// bill = 275;
// bill = 40;
bill = 430;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and t he total value ${bill + tip}`
);
