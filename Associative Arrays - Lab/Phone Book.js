function phoneBook(input) {
  let phoneBook = {};

  for (line of input) {
    let token = line.split(" ");
    let name = token[0];
    let num = token[1];
    phoneBook[name] = num;
  }
  for(key in phoneBook){
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
