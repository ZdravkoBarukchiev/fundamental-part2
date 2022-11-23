function valueOfaString(input) {
  let text = input[0];
  let command = input[1];
  switch (command) {
    case "LOWERCASE":
      let lowArr = [];
      for (el of text) {
        if (el == el.toLowerCase()) {
          lowArr.push(el);
        }
      }
      let lowCount = 0;
      for (el of lowArr) {
        let num = el.charCodeAt();
        lowCount += num;
      }
      console.log(`The total sum is: ${lowCount}`);
      break;
    case "UPPERCASE":
      let upArr = [];
      for (el of text) {
        if (el == el.toUpperCase()) {
          upArr.push(el);
        }
      }
      let upCount = 0;
      for (el of upArr) {
        let num = el.charCodeAt();
        upCount += num;
      }
      console.log(`The total sum is: ${upCount}`);
      break;
  }
}
valueOfaString(["AC/DC", "UPPERCASE"]);
