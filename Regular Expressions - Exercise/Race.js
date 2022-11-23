function race(input) {
  const list = input.shift();
  const namePattern = /[A-Za-z]/g;
  const digitPattern = /\d/g;
  let infoObj = {};
  let index = 0;
  let command = input[index];
  while (command !== "end of race") {
    let name = command.match(namePattern).join("");
    let distanceArr = command.match(digitPattern);
    let distance = 0;
    if (list.includes(name)) {
      for (el of distanceArr) {
        distance += Number(el);
      }
      if (!infoObj.hasOwnProperty(name)) {
        infoObj[name] = 0;
      }
      infoObj[name] += distance;
    }
    index++;
    command = input[index];
  }
  let sortedPlayers = Object.entries(infoObj).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sortedPlayers[0][0]}`);
  console.log(`2nd place: ${sortedPlayers[1][0]}`);
  console.log(`3rd place: ${sortedPlayers[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
