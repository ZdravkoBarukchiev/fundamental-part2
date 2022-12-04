function messageTranslator(arr) {
  let arrLengt = arr.shift();
  let pattern = /(!)(?<command>[A-Z][a-z]{2,})\1[:](?<str>[\[][\w]{8,}[\]])/g;
  let printLine=''
  for (el of arr) {
    let token = pattern.exec(el);
    if (token) {
      printLine+=(`${token.groups.command}:`);
      let str=token.groups.str
      for(let i=1;i<str.length-1;i++){
        let s=str[i]
        let num=s.charCodeAt()
        printLine+=` ${num}`
      }
      console.log(printLine);
    } else {
      console.log("The message is invalid");
    }
  }
}

messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
