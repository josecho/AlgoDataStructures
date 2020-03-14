// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every
// ANOTHE SOLUTION: this is not a ideal solution, we are doing more comparisons that are necesary
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// FIRTS SOLUTION
// function palindrome(str) {
//   return (
//     str ===
//     str
//       .split("")
//       .reverse()
//       .join("")
//   );
// }

// SECOND SOLUTION:
// function palindrome(str) {
//   return str === str.split("").reduce((rev, char) => char + rev, "");
// }
