'use strict';

function getYearOfBirth(age) {
  return 2020 - age;
}

console.log(getYearOfBirth(33));

function createGreeting(name, age) {
  const yearOfBirth = 2020 - age;
  return `Hi my name is ${name} and I\'m ${age} years old.  I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Andrew', 33);
console.log(greeting1);