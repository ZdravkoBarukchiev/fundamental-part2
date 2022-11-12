function storage(input) {
  let items = {};
  for (el of input) {
    let token = el.split(" ");
    let name = token[0];
    let qantity = Number(token[1]);
    if (!items.hasOwnProperty(name)) {
      items[name] = qantity;
    } else {
      let currentQantity = qantity + items[name];
      items[name] = currentQantity;
    }
  }
  for (key in items) {
    console.log(`${key} -> ${items[key]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
