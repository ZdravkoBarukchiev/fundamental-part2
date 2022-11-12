function countStringOccurrences(text, word) {
  let arr = text.split(" ");
  let count = 0;
  for (el of arr) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}
countStringOccurrences(
  "This is a word and it also is a sentence",

  "is"
);
