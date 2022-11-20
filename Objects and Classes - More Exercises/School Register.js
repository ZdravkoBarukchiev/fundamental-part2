function schoolRegister(input) {
  let arr = [];
  for (el of input) {
    let token = el.split(", ");
    let obj = {};
    for (el of token) {
      let info = el.split(": ");
      obj[info[0]] = info[1];
    }
    arr.push(obj);
  }
  let actualList = [];
  for (el of arr) {
    if (Number(el["Graduated with an average score"]) >= 3) {
      el["Grade"] = Number(el["Grade"]) + 1;
      actualList.push(el);
    }
  }
  let finalArr=[]
  for (let i = 1; i < actualList.length; i++) {
    let gradeArr = [];
    let firstObj = actualList[i];
    gradeArr.push(firstObj)
    for (let j = 0; j < i; j++) {
      let secondObj = actualList[j];
      if (Number(firstObj.Grade) == Number(secondObj.Grade)) {
        gradeArr.push( secondObj);
      }
    }
    finalArr.push(gradeArr)
  }
console.log(finalArr);
}
schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",

  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",

  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",

  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",

  "Student name: John, Grade: 9, Graduated with an average score: 2.90",

  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",

  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
