function modernTimesOfHashTag(input) {
  let words = input.split(" ");
  words.forEach((w) => {
    const isValid = w.startsWith("#") && w.length > 1;
    if (isValid) {
      let isLeter = false;
      let correctWord = "";
      for (let i = 1; i < w.length; i++) {
        let char = w[i];
        if (
          (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
          (char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
        ) {
          isLeter = true;
          correctWord += char;
        } else {
          isLeter = false;
          break;
        }
      }
      if (isLeter) {
        console.log(correctWord);
      }
    }
  });
}
modernTimesOfHashTag(
  "The symbol # is known #variou-sly in English-speaking #regions as the #number sign"
);
