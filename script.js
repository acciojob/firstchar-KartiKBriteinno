function firstChar(text) {
  // Iterate over each character in the input string
  for (let i = 0; i < text.length; i++) {
    // Check if the current character is not a space
    if (text[i] !== ' ') {
      // Return the first non-space character
      return text[i];
    }
  }
  // If the input string only contains spaces or is empty, return an empty string
  return '';
}

console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
