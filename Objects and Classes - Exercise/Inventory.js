function inventory(arr) {
  let array = arr;
  let heros = [];
  for (el of array) {
    let info = el.split(" / ");
    let hero = info[0];
    let level = info[1];
    let items = info[2].split(", ").join(", ");
    let heroObj = {
      hero,
      level,
      items,
    };
    heros.push(heroObj);
  }
  heros.sort((a, b) => a.level - b.level);
  for (el of heros) {
    console.log(`Hero: ${el.hero}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
