function replaceRepeatingChars(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let nextChar = string[i + 1];
    if (char != nextChar) {
      result += char;
    }
  }
  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
