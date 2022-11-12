function cityInfo(city) {
  let entries = Object.entries(city);
  for ([key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
cityInfo({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
