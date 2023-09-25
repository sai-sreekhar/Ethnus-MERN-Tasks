// Function to reverse a number
let reverseNumber = function (number) {
  // Convert the number to a string and split it into an array of digits
  number = String(number).split("");
  let reversedDigits = [];

  // Iterate through the digits in reverse order and push them into the reversedDigits array
  for (let i = number.length - 1; i >= 0; i--) {
    reversedDigits.push(number[i]);
  }
  
  // Join the reversed digits to form the reversed number as a string
  return reversedDigits.join("");
};

// Input number
let inputNumber = 162387;

// Call the reverseNumber function to get the reversed number
let reversedNumber = reverseNumber(inputNumber);

// Log the input number and the reversed number to the console
console.log(`Input : ${inputNumber}`);
console.log(`Reversed Number : ${reversedNumber}`);
