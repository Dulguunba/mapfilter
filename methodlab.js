let num = [1, 2, 3, 4, 5];
// **Double the Numbers:**
//Given an array of numbers, use the `map` method to create a new array where each number is doubled.

console.log(num.map((el, i) => el * 2));

console.log(
  num.map(function doubled(el) {
    return el * 2;
  })
);
// 2. **Convert Temperatures:**   Create a function that takes an array of temperatures in Celsius and use `map` to convert them to Fahrenheit.

console.log(num.map((el) => (el * 9) / 5 + 32));

console.log(
  num.map(function (el) {
    return (el * 9) / 5 + 32;
  })
);

// 3. **Square Roots:**   Given an array of numbers, use `map` to find the square root of each number and create a new array with the results.

console.log(num.map(Math.sqrt));

console.log(
  num.map(function (el) {
    return Math.sqrt(el);
  })
);

// 4. **Uppercase Names:**   Given an array of names, use `map` to create a new array where each name is in uppercase.

let names = ["boogii", "baabiii", "bolor", "anu"];
console.log(names.map((el) => el.toUpperCase()));

console.log(
  names.map(function (names) {
    return names.toUpperCase();
  })
);

// 5. **Extract Initials:**   Create a function that takes an array of full names and uses `map` to generate an array of initials (first letter of the first name and last name).
let array = [
  {
    firstName: "Narantsatsralt",
    lastName: "Bumnasan",
    phoneNumber: "99111111",
  },
  { firstName: "Namkhai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Gundalai", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Lkhamjav", lastName: "Bumnasan", phoneNumber: "99111111" },
  { firstName: "Serik", lastName: "Bumnasan", phoneNumber: "99111111" },
];

console.log(
  array.map((el) => el.firstName[0].toUpperCase() + "." + el.lastName)
);

console.log(
  array.map(function (el) {
    return el.firstName[0].toUpperCase() + "." + el.lastName;
  })
);

// 6. **Even Numbers:**   Given an array of numbers, use the `filter` method to create a new array containing only the even numbers.

console.log(num.filter((el) => el % 2 === 0));

console.log(
  num.filter(function (el) {
    return el % 2 === 0;
  })
);

// 7. **Positive Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the positive numbers.

console.log(num.filter((el) => el >= 0));

console.log(
  num.filter(function (el) {
    return el >= 0;
  })
);

// 8. **Long Words:**   Given an array of words, use `filter` to create a new array with only the words that have a length greater than a specified number.

let minlength = 3;
console.log(names.filter((students) => students.length > minlength));

console.log(
  names.filter(function minName(el) {
    return el.length > minlength;
  })
);

// 9. **Prime Numbers:**   Create a function that takes an array of numbers and uses `filter` to generate a new array containing only the prime numbers.

console.log(
  num.filter(function prime(numbers) {
    let div = 0;
    for (let i = 2; i < numbers; i++) {
      if (numbers % i !== 0) {
        div++;
      }
    }
    return div === numbers - 2;
  })
);

// 10. **Search by Starting Letter:**    Given an array of words, use `filter` to create a new array with only the words that start with a specific letter.

console.log(names.filter((students) => students[0].toLowerCase() == "a"));

console.log(
  names.filter(function shortName(el) {
    return el[0].toLowerCase() == "a";
  })
);
