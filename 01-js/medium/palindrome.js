/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  left=0;
  right=str.length-1;
  while(left<=right){
    if (!isLetter(str[left])) left+=1
    else if (!isLetter(str[right])) right-=1
    else if(str[left]==str[right]){
      left+=1;
      right-=1;
    }
    else return false;
  }
  return true;
}
function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

module.exports = isPalindrome;
