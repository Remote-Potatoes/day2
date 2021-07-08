console.log("HELLO");

// BigInt
// String, Number, Boolean, NaN, Object, Array, undefined, null

// Truthy

// Falsy
// 0, "", NaN, undefined, null, -0
// false

// " ", [], true, 1, -1, {}

if (" ") {
  console.log("This is trythy");
}

const age = "twenty seven";

const age5YearsAgo = age - 5;
console.log("age5YearsAgo:", age5YearsAgo);

if (age5YearsAgo) {
  console.log(`I would have been ${age5YearsAgo} old`);
} else {
  console.log("You didn't type a corrent age value");
}

const filipeAbilityToDrinkAlcohol = 7;

if (filipeAbilityToDrinkAlcohol >= 18) {
  console.log("Shots down");
} else if (
  filipeAbilityToDrinkAlcohol < 18 &&
  filipeAbilityToDrinkAlcohol > 15
) {
  console.log("Nope, but in some countries, maybeee");
} else {
  console.log("Go to bed and sleep");
}

console.log("boolean value: ", Boolean(filipeAbilityToDrinkAlcohol));

// && AND Operator
// value1 && value2
// both values MUST be truthy in order for the second value to even be read
// the momemnt one of these values is falsy, it returns false

// || OR Operator
// value1 || value2

// !operator
console.log("The opposite of ", true, " is", !"anna");

const arrayOfPeople = [
  "Anna",
  "Cheryl",
  "Noemi",
  "Amy",
  "Chris",
  "Daniel",
  "Marie",
  "Juan",
  "Noemi",
  "Pablo",
  "Filipe",
  "Andre",
];

for (let i = 0; i < arrayOfPeople.length; i++) {
  //   console.log(i);
  //   console.log(arrayOfPeople[i]);
  console.log(`Oprah says: ${arrayOfPeople[i]}, you get a car`);
}

console.log("EVERYBODY GETS A CAR");

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 150; j++) {
    console.log("VALUE OF I", i);
    console.log("VALUE OF J", j);
  }
}

console.clear();

let year = 25;

while (year) {
  console.log("YOU CAN STILL DO SOMETHING");
  year--;
}

let i = -5;

do {
  console.log("STILL NEGATIVE");
  i++;
} while (i < 0);

const oneMillionDollars = 1000000;

for (let i = 1; i < oneMillionDollars; i += 100) {
  console.log(`Still ${oneMillionDollars - i} dollars to go. ehehehe`);
  if (i < 5000) {
    console.log("OKay thats enough");
    break;
  }
}

for (let i = 10; i > 0; i--) {
  console.log("SHOUTING: ", i);
}

console.log("HAPPY NEW YEAR");

const favoriteDrink = "water";

switch (favoriteDrink) {
  case "wine": {
    console.log("I am a wine drinker");
    break;
  }
  case "coca cola": {
    console.log("I am a coke drinker");
    break;
  }
  case "orange juice": {
    console.log("I like OJ");
    break;
  }
  case "water": {
    console.log("tap is fine");
    break;
  }
  default: {
    console.log("you just cant be pleased. drink whatever you want");
    break;
  }
}

console.clear();

const mariesName = "Marie-Frederique Luce";

console.log(mariesName[6]);

for (let i = 0; i < mariesName.length; i++) {
  console.log(mariesName[i]);
}

// for loop read in three parts
// 1 -> initial value
// 2 -> condition for the for loop to execute
// 3 -> what should happen in the end of each iteration through the loop
for (let i = mariesName.length; i >= 0; i--) {
  console.log(mariesName[i]);
}
console.clear();

// const, let, var

// for ... of
// whenever we do this loop, we lose the index. we just get the value at that specific index

for (let current = 0; current < arrayOfPeople.length; current++) {
  console.log("CURRENT PERSON IN THE ARRAY IS: ", arrayOfPeople[current]);
}

for (let currentPerson of arrayOfPeople) {
  console.log("CURRENT PERSON IN THE ARRAY:", currentPerson);
}
