const numbers = [1, 2, 3, 4, 3, 2, 1];
const isPalindrome = (numbers) => {
  let j = numbers.length - 1;
  for (let i = 0; i < numbers.length / 2; i++) {
    const element = numbers[i];
    if (element != numbers[j]) {
      return false;
    }
    j--;
  }
  return true;
};
console.log(isPalindrome(numbers));
