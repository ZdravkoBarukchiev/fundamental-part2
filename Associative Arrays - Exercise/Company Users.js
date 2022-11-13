function companyUsers(input) {
  let obj = {};
  for (el of input) {
    let [company, id] = el.split(" -> ");
    if (!obj.hasOwnProperty(company)) {
      obj[company] = [];
    }
    if (!obj[company].includes(id)) obj[company].push(id);
  }
  let companyToken = Object.entries(obj);
  let sortedCompany = companyToken.sort((a, b) => a[0].localeCompare(b[0]));
  for (el of sortedCompany) {
    console.log(el[0]);
    let employedsId = el[1];
    for (id of employedsId) {
      console.log(`-- ${id}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
