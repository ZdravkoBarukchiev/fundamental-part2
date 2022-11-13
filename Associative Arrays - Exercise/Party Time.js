function partyTime(input) {
  let arr = input;
  let guestList = {
    vip: [],
    regular: [],
  };
  let index = 0;
  let command = arr[index];
  while (command !== "PARTY") {
    let guest = arr.shift();
    let firstChar = command[0];
    if (isNaN(firstChar)) {
      guestList.regular.push(guest);
    } else {
      guestList.vip.push(guest);
    }
    command = input[index];
  }
  arr.shift();
  for (guest of arr) {
    if (guestList.vip.includes(guest)) {
      let index = guestList.vip.indexOf(guest);
      guestList.vip.splice(index, 1);
    } else if (guestList.regular.includes(guest)) {
      let index = guestList.regular.indexOf(guest);
      guestList.regular.splice(index, 1);
    }
  }
  let vipGuests = guestList.vip.length;
  let regularGuests = guestList.regular.length;
  console.log(vipGuests + regularGuests);
  console.log(guestList.vip.join("\n"));
  console.log(guestList.regular.join("\n"));
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
