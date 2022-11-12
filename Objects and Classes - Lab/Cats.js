function cats(arr) {
  let array = arr;
  class Cats {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
      this.says = () => {
        console.log(`${this.name}, age ${this.age} says Meow`);
      };
    }
  }
  let arrOfCats = [];
  for (el of array) {
    let catArr = el.split(" ");
    let currentCat = new Cats(catArr[0], catArr[1]);
    arrOfCats.push(currentCat);
  }
  arrOfCats.forEach((c) => c.says());
}
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
