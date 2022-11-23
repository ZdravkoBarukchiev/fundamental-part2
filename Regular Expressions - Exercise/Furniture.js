function furniture(input) {
  const pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+.\d+)!(?<qantity>\d+)/g;
  let index = 0;
  let command = input[index];
  let totalPrice = 0;
  console.log("Bought furniture:");
  while (command != "Purchase") {
    let info = pattern.exec(command);

    if (info) {
      let price = Number(info.groups.price);
      let name = info.groups.name;
      let qantity = Number(info.groups.qantity);
      totalPrice += price * qantity;
      console.log(name);
    }
    index++;
    command = input[index];
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
