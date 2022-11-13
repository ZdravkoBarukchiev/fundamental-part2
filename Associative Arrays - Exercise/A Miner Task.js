function aMinerTask(input) {
  let obj = {};
  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = input[i + 1];

    if (!obj.hasOwnProperty(resource)) {
      obj[resource] = [];
    }
    obj[resource].push(quantity);
  }
  let infoToken = Object.entries(obj);
  for (el of infoToken) {
    let name = el[0];
    let sum = 0;
    let arrQuantity = el[1];
    for (el of arrQuantity) {
      sum += Number(el);
    }
    console.log(`${name} -> ${sum}`);
  }
}

aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
