function stringSubstring(word, text) {
  let wordsArr = text.split(" ");
  let notFound = true;
  for (el of wordsArr) {
    if (el.toLowerCase() == word.toLowerCase()) {
      console.log(word);
      notFound = false;
      break;
    }
  }
  if (notFound) {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
