function towns(arr) {
  let array = arr;
  for (el of array) {
    let singleTown = el.split(" | ");

    let objTown = {
      town: singleTown[0],
      latitude: Number(singleTown[1]).toFixed(2),
      longitude: Number(singleTown[2]).toFixed(2),
    };
    console.log(objTown);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
