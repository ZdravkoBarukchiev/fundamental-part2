function wordOccurrences(input) {
  let arr = input;
  let infoObj = {};

  for (el of arr) {
    infoObj[el] = 0;
  }
  for (el of arr) {
    if (infoObj.hasOwnProperty(el)) {
      infoObj[el]++;
    }
  }
  let sortedEntries = Object.entries(infoObj).sort((a, b) => {
    let valueA = a[1];
    let valueB = b[1];
    return valueB - valueA;
  });
  sortedEntries.forEach((entrie)=>{
    console.log(`${entrie[0]} -> ${entrie[1]} times`);
  })
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
