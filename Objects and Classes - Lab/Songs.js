function songs(arr) {
  let array = arr;
  let numOfSongs = array.shift();
  let desiredPlayList = array.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
      this.print = () => console.log(this.name);
    }
  }
  let arrayOfSongs = [];
  for (el of array) {
    let songArr = el.split("_");
    let currentSong = new Song(songArr[0], songArr[1], songArr[2]);
    arrayOfSongs.push(currentSong);
  }
  if (desiredPlayList === "all") {
    arrayOfSongs.forEach((s) => s.print());
  } else {
    let filtredSongs = arrayOfSongs.filter(
      (s) => desiredPlayList === s.typeList
    );
    filtredSongs.forEach((s) => s.print());
  }
}
songs([
  3,

  "favourite_DownTown_3:14",

  "favourite_Kiss_4:16",

  "favourite_Smooth Criminal_4:01",

  "favourite",
]);
