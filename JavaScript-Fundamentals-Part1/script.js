const age = 18;

if (age >= 18) {
  console.log("You can start driving license.");
} else {
  const yearLeft = 18 - age;
  console.log(`You is too young. Wait another ${yearLeft} years.`);
}
