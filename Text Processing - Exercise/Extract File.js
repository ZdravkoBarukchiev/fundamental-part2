function extractFile(string) {
  let pathArr = string.split("\\");
  let fileName = pathArr.pop();
  let infoArr = fileName.split(".");
  let extention = infoArr.pop();
  let name = "";
  if (infoArr.length > 1) {
    name = infoArr.join(".");
  } else {
    name = infoArr[0];
  }
  console.log(`File name: ${name}`);
  console.log(`File extension: ${extention}`);
}
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
