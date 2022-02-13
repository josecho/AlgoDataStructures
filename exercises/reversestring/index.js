// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;

// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// Never Use Array.from() to Convert Strings to Arrays
// Splitting a string into an array is about 70 times faster with 'a string'.split('') 
// than Array.from('a string')
// function reverse(str) {
//   return Array.from(str).reverse().join('');
// }

// function reverse(str) {
//   let reversed = "";
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
