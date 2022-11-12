function convertToObject(jsonStr) {
  let person = JSON.parse(jsonStr);
  let entries = Object.entries(person);

  for ([key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
