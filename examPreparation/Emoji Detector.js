function emojiDetector(input) {
  let text = input[0]
  let digitPatern = /\d/g;
  let digitArr = text.match(digitPatern);
  let treshold = digitArr.reduce((acc, digit) => acc * digit, 1);
  let emojiPattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g
  let emojis = text.matchAll(emojiPattern)
  let emojiCount = 0
  let coolEmojis = []
  for (let emojiArr of emojis) {
    emojiCount++
    let emoji = emojiArr.groups.emoji;
    let emojiCoolnes = 0
    for (let char of emoji) {
      let num = char.charCodeAt()
      emojiCoolnes += num
    }
    if (emojiCoolnes >= treshold) {
      coolEmojis.push(emojiArr[0])
    }
  }
  console.log(`Cool threshold: ${treshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  for (let el of coolEmojis) {
    console.log(el);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
