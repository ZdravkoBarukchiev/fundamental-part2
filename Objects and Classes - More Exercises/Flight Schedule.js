function flightSchedule(input) {
  let obj = {};
  let flights = input[0];
  let numOfFlight = "";
  let Status = "";
  for (el of flights) {
    let fly = el.split(" ");
    numOfFlight = fly.shift();
    Status = "Ready to fly";
    let Destination = "";
    for (el of fly) {
      Destination += `${el}`;
    }
    obj[numOfFlight] = { Destination, Status };
  }

  let changes = input[1];
  for (el of changes) {
    let [num, stat] = el.split(" ");

    for (key in obj) {
      if (key == num) {
        let info = obj[key];
        info.Status = stat;
      }
    }
  }
  for (key in obj) {
    let infoObj = obj[key];
    if (infoObj.Status == input[2][0]) {
      console.log(obj[key]);
    }
  }
}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],

  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],

  ["Cancelled"],
]);
