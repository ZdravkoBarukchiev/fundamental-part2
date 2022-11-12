function employees(arr) {
  let array = arr;
  for (el of array) {
    let person = {
      name: el,
      personalNum: el.length,
    };
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNum}`
    );
  }
}
employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
