/////////////////////////////////////////
// Coding Challenge #1
// TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// TEST DATA 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log("Mark's BMI: " + BMIMark);
console.log("John's BMI: " + BMIJohn);
console.log("Is Mark's BMI higher than John's BMI: " + markHigherBMI);

/////////////////////////////////////////
// Coding Challenge #2
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
  );
}
