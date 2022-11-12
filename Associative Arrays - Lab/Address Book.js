function addressBook(input) {
  let adressInfo = {};

  for (line of input) {
    let [name, adress] = line.split(":");
    adressInfo[name] = adress;
  }
  let entries = Object.entries(adressInfo);
  entries.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    return keyA.localeCompare(keyB);
  });
  for (el of entries) {
    console.log(`${el[0]} -> ${el[1]}`);
  }
}
addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
