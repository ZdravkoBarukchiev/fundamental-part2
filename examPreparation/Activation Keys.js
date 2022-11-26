function activationKeys(input) {
  let key = input.shift();
  let index = 0;
  let row = input[index];
  while (row != "Generate") {
    let arr = row.split(">>>");
    let command = arr.shift();
    switch (command) {
      case "Slice":
        let startIndex = arr[0];
        let endIndex = arr[1];
        let delString = key.substring(startIndex, endIndex);
        key = key.replace(delString, "");
        console.log(key);
        break;
      case "Flip":
        let flipCommand = arr[0];
        let start = arr[1];
        let end = arr[2];
        let changeString = key.substring(start, end);
        if (flipCommand == "Upper") {
          let newUperString = changeString.toUpperCase();
          key = key.replace(changeString, newUperString);
          console.log(key);
        } else {
          let newLowerString = changeString.toLowerCase();
          key = key.replace(changeString, newLowerString);
          console.log(key);
        }
        break;
      case "Contains":
        let substr = arr[0];
        if (key.includes(substr)) {
          console.log(`${key} contains ${substr}`);
        } else {
          console.log("Substring not found!");
        }

        break;
    }
    index++;
    row = input[index];
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",

  "Slice>>>2>>>6",

  "Flip>>>Upper>>>3>>>14",

  "Flip>>>Lower>>>5>>>7",

  "Contains>>>def",

  "Contains>>>deF",

  "Generate",
]);
