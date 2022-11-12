function schoolGrades(input) {
  let studentInfo = {};
  let averageGradeInfo = {};
  for (el of input) {
    let infoArr = el.split(" ");
    let student = infoArr.shift();
    let gradeArr = [];
    for (grade of infoArr) {
      gradeArr.push(grade);
    }

    if (!studentInfo.hasOwnProperty(student)) {
      studentInfo[student] = gradeArr;
    } else {
      for (grade of infoArr) {
        studentInfo[student].push(grade);
      }
    }
  }
  for (key in studentInfo) {
    let totalGradeArr = studentInfo[key];
    let sum = 0;
    for (el of totalGradeArr) {
      sum += Number(el);
    }
    let averageGrade = sum / totalGradeArr.length;

    averageGradeInfo[key] = averageGrade;
  }
  let entries=Object.entries(averageGradeInfo);
  entries.sort((a,b)=>{
    let keyA=a[0];
    let keyB=b[0];
    return keyA.localeCompare(keyB);
  })
  for( el of entries){
    let name=el[0];
    let avGrade=el[1];
    console.log(`${name}: ${avGrade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
