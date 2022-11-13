function piccolo(input) {
  let obj = {};
  for (el of input) {
    let carInfo = el.split(", ");
    if (carInfo[0] === "IN") {
      obj[carInfo[1]] = carInfo[0];
    } else {
      delete obj[carInfo[1]];
    }
  }
  let keys = Object.keys(obj);
  if (keys.length <= 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(keys.sort((a, b) => a.localeCompare(b)).join("\n"));
  }
}
piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);
