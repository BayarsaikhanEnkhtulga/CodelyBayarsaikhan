let numbers = [17];
let array = [];
let palindrome = [];
let notpalindrome = [];
const isPalindrome = (numbers) => {
  for (let x = 0; x < numbers; x++) {
    array.push(x);
  }
  for (let l = array.length-1; l >= 0; l--) {
    let j = l - 1;
    for (let i = 0; i < l / 2; i++) {
      if (l[i] != l[j]) {
        notpalindrome.push(i);
      }
      j--;
      palindrome.push(i);
    }
  }
  console.log(palindrome);
};
console.log(isPalindrome(numbers));
