/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert strings to lowercase, then to arrays, sort them, and join back into strings
  var sortedStr1 = str1.toLowerCase().split('').sort().join('');
  var sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
