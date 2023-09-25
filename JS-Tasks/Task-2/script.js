// Function to sort characters in a string by their Unicode values
let sortCharactersByUnicode = function (str) {
  // Create a Map to store the character positions and their Unicode values
  let charMap = new Map();

  // Populate the Map with character positions and their Unicode values
  for (let i = 0; i < str.length; i++) {
    charMap.set(i, str.charCodeAt(i));
  }

  // Sort the Map by Unicode values
  let sortedCharMap = new Map([...charMap.entries()].sort(([, a], [, b]) => a - b));

  // Convert the sorted Unicode values back to characters and join them to form the sorted string
  return [...sortedCharMap.values()].reduce(function (acc, value) {
    return acc + String.fromCharCode(value);
  }, "");
};

// Function to sort characters in a string alphabetically
let sortCharactersAlphabetically = function (str) {
  return str.split("").sort().join("");
};

// Both above functions perform the same task, so either one is correct
console.log(`Input : saisreekardeveloper`);
console.log(sortCharactersByUnicode("saisreekardeveloper"), sortCharactersAlphabetically("saisreekardeveloper"));
