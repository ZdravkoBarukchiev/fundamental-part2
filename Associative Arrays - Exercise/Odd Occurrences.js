function oddOccurrences(input) {
  let inputArr = input.toLowerCase().split(" ");
  let obj = {};
  for (el of inputArr) {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }

  let entries = Object.entries(obj);
  let resultArr = [];
  for (el of entries) {
    let keys = el[0];
    let values = el[1];
    if (values % 2 !== 0) {
      resultArr.push(keys);
    }
  }
  console.log(resultArr.join(" "));
}
oddOccurrences(" Java C# Php PHP Java PhP 3 C# 3 1 5 C# ");
