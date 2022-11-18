const yearsUntilRetirement = (birthYear, lastName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${lastName} retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(2001, "Nhan"));
