function cardGame(input) {
  let obj = {};
  let pointsObj = {};
  for (el of input) {
    let token = el.split(": ");
    let name = token[0];
    let cardsArr = token[1].split(", ");
    for (e of cardsArr) {
      if (!obj.hasOwnProperty(name)) {
        obj[name] = [];
      }
      if (!obj[name].includes(e)) obj[name].push(e);
    }
  }
  let objToken = Object.entries(obj);
  for (el of objToken) {
    let player = el[0];
    let cards = el[1];
    let sum = 0;
    for (c of cards) {
      let type = "";
      let power = "";
      if (c.length == 2) {
        type = c[0];
        power = c[1];
      } else {
        type = c[0] + c[1];
        power = c[2];
      }
      switch (type) {
        case "2":
          if (power == "C") {
            sum += 2;
          } else if (power == "D") {
            sum += 2 * 2;
          } else if (power == "H") {
            sum += 2 * 3;
          } else if (power == "S") {
            sum += 2 * 4;
          }
          break;
        case "3":
          if (power == "C") {
            sum += 3;
          } else if (power == "D") {
            sum += 3 * 2;
          } else if (power == "H") {
            sum += 3 * 3;
          } else if (power == "S") {
            sum += 3 * 4;
          }
          break;
        case "4":
          if (power == "C") {
            sum += 4;
          } else if (power == "D") {
            sum += 4 * 2;
          } else if (power == "H") {
            sum += 4 * 3;
          } else if (power == "S") {
            sum += 4 * 4;
          }
          break;
        case "5":
          if (power == "C") {
            sum += 5;
          } else if (power == "D") {
            sum += 5 * 2;
          } else if (power == "H") {
            sum += 5 * 3;
          } else if (power == "S") {
            sum += 5 * 4;
          }
          break;
        case "6":
          if (power == "C") {
            sum += 6;
          } else if (power == "D") {
            sum += 6 * 2;
          } else if (power == "H") {
            sum += 6 * 3;
          } else if (power == "S") {
            sum += 6 * 4;
          }
          break;
        case "7":
          if (power == "C") {
            sum += 7;
          } else if (power == "D") {
            sum += 7 * 2;
          } else if (power == "H") {
            sum += 7 * 3;
          } else if (power == "S") {
            sum += 7 * 4;
          }
          break;
        case "8":
          if (power == "C") {
            sum += 8;
          } else if (power == "D") {
            sum += 8 * 2;
          } else if (power == "H") {
            sum += 8 * 3;
          } else if (power == "S") {
            sum += 8 * 4;
          }
          break;
        case "9":
          if (power == "C") {
            sum += 9;
          } else if (power == "D") {
            sum += 9 * 2;
          } else if (power == "H") {
            sum += 9 * 3;
          } else if (power == "S") {
            sum += 9 * 4;
          }
          break;
        case "10":
          if (power == "C") {
            sum += 10;
          } else if (power == "D") {
            sum += 10 * 2;
          } else if (power == "H") {
            sum += 10 * 3;
          } else if (power == "S") {
            sum += 10 * 4;
          }
          break;
        case "J":
          if (power == "C") {
            sum += 11;
          } else if (power == "D") {
            sum += 11 * 2;
          } else if (power == "H") {
            sum += 11 * 3;
          } else if (power == "S") {
            sum += 11 * 4;
          }
          break;
        case "Q":
          if (power == "C") {
            sum += 12;
          } else if (power == "D") {
            sum += 12 * 2;
          } else if (power == "H") {
            sum += 12 * 3;
          } else if (power == "S") {
            sum += 12 * 4;
          }
          break;
        case "K":
          if (power == "C") {
            sum += 13;
          } else if (power == "D") {
            sum += 13 * 2;
          } else if (power == "H") {
            sum += 13 * 3;
          } else if (power == "S") {
            sum += 13 * 4;
          }
          break;
        case "A":
          if (power == "C") {
            sum += 14;
          } else if (power == "D") {
            sum += 14 * 2;
          } else if (power == "H") {
            sum += 14 * 3;
          } else if (power == "S") {
            sum += 14 * 4;
          }
          break;
      }
    }
    pointsObj[player] = sum;
  }
  for (key in pointsObj) {
    console.log(`${key}: ${pointsObj[key]}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",

  "Tomas: 3H, 10S, JC, KD, 5S, 10S",

  "Andrea: QH, QC, QS, QD",

  "Tomas: 6H, 7S, KC, KD, 5S, 10C",

  "Andrea: QH, QC, JS, JD, JC",

  "Peter: JD, JD, JD, JD, JD, JD",
]);
