function stringManipulator(arr) {
  let str = arr.shift();
  let stringArr = str.split("");
  let index = 0;
  let token = arr[index];
  while (token !== "End") {
    let tokenArr = token.split(" ");
    let command = tokenArr[0];
    switch (command) {
      case "Translate":
        let char = tokenArr[1];
        let replacment = tokenArr[2];
        for (let i = 0; i < stringArr.length; i++) {
          if (stringArr[i] == char) {
            stringArr.splice(i, 1, replacment);
          }
        }
        str = stringArr.join("");
        console.log(str);
        break;
      case "Includes":
        let incStr = tokenArr[1];
        if (str.includes(incStr)) {
          console.log('True');
        } else {
          console.log('False');
        }
        break;
      case "Start":
        let startStr = tokenArr[1];
        let lengt = startStr.length;
        let firstStr = str.substring(0, lengt);
        if (startStr == firstStr) {
          console.log('True');
        } else {
          console.log('False');
        }
        break;
      case "Lowercase":
        let lowerStr = str.toLowerCase();
        str = lowerStr;
        stringArr = str.split("");
        console.log(str);
        break;
      case "FindIndex":
        let indexForFind = tokenArr[1];
        for (let j = stringArr.length - 1; j >= 0; j--) {
          let currentStr = stringArr[j];
          if (indexForFind == currentStr) {
            console.log(j);
            break;
          }
        }
        break;
      case "Remove":
        let remStartIndex = Number(tokenArr[1]);
        let count = Number(tokenArr[2]);
        let stringToRemove=str.substring(remStartIndex,remStartIndex+count)
         str=str.replace(stringToRemove,'')
         console.log(str);        
        break;
    }

    index++;
    token = arr[index];
  }
}
stringManipulator([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
