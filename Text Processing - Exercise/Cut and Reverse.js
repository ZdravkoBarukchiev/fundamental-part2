function cutandReverse(string) {
  let arr = string.split("");
  let firstArr = [];
  let secondArr = [];
  for (let i = 0; i < arr.length / 2; i++) {
    firstArr.unshift(arr[i]);
  }
  for (let i = arr.length / 2; i < arr.length; i++) {
    secondArr.unshift(arr[i]);
  }
  console.log(firstArr.join(""));
  console.log(secondArr.join(""));
}
cutandReverse("tluciffiDsIsihTgnizamAoSsIsihT");
