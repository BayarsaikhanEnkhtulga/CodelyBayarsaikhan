let alphabetic = [
  "1",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let word = prompt("Enter your word");
let wordletters = word.split("");
for (let i = 0; i < wordletters.length; i++) {
  wordletters[i];
  let index = alphabetic.indexOf(wordletters[i]);
  console.log(index);
}
