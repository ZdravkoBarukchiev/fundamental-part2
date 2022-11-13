function wordTracker(input) {
  let arr = input;
  let serchingWords = arr.shift().split(" ");
  let wordObj = {};
  for (el of serchingWords) {
    wordObj[el] = 0;
  }
  for (el of arr) {
    if (wordObj.hasOwnProperty(el)) {
      wordObj[el]++;
    }
  }
  let sortedEntries = Object.entries(wordObj).sort((a, b) => {
    let countA = a[1];
    let countB = b[1];
    return countB - countA;
  });

  sortedEntries.forEach((el) => {
    console.log(`${el[0]} - ${el[1]}`);
  });
}
wordTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
