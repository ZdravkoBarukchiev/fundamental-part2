function makeADictionary(input) {
  let array = input;
  let newObj = {};
  for (el of array) {
    let obj = JSON.parse(el);
    let infoArr = Object.entries(obj);
    newObj[infoArr[0][0]] = infoArr[0][1];
  }
  let infoArr = Object.entries(newObj).sort((a, b) => a[0].localeCompare(b[0]));
  infoArr.map((x) => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));
}

makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
