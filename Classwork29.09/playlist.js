// function Playlist(){
//     this.songs = [];
//     this.isPlaying = false;
//     this.indexOfSong = 0
//     this.add = function(songObj){
//         this.songs.push(songObj);
//         return `${songObj.title} by ${songObj.artist} has been added to the playlist`
//     }
//     this.play = function(){
//         this.isPlaying = true;
//         return `${this.songs[this.indexOfSong].title} Started by ${this.songs[this.indexOfSong].artist}`
//     }
//     this.next = function(){
//         if (this.indexOfSong < this.songs.length - 1) {
//             this.indexOfSong += 1
//             return `Next Song: ${this.songs[this.indexOfSong].title} by ${this.songs[this.indexOfSong].artist}`
//         } else {
//             return `No more songs in the playlist, playing the first song:  ${this.songs[0].song} by ${this.songs.artist}`
//         }
//     }
//     this.stop = function() {
//         this.isPlaying = false;
//         return `${this.songs[this.indexOfSong].title} by ${this.songs[this.indexOfSong].artist} stopped`
//     }
// }
// function Song(title, artist){
//     this.title = title;
//     this.artist = artist;
// }

// const  song1 = new Song('Song1', 'Artist1');
// const song2 = new Song('Song2', 'Artist2');
// const song3 = new Song('Song3', 'Artist3');
// const playlist = new Playlist();
// console.log(playlist.add(song1));
// console.log(playlist.add(song2));
// console.log(playlist.add(song3));
// console.log(playlist.play());
// console.log(playlist.next());
// console.log(playlist.stop());
// console.log(playlist);

/**********************************************/

function Playlist() {
    let playlist = {
      songs: [],
      isPlaying: false,
      indexOfSong: 0,
      add: function(songObj) {
        playlist.songs.push(songObj);
        return `${songObj.title} by ${songObj.artist} has been added to the playlist`
      },
      play: function() {
        playlist.isPlaying = true;
        return `${playlist.songs[playlist.indexOfSong].title} Started by ${playlist.songs[playlist.indexOfSong].artist}`
      },
      next: function() {
        if (playlist.indexOfSong < playlist.songs.length - 1) {
          playlist.indexOfSong += 1
          return `Next Song: ${playlist.songs[playlist.indexOfSong].title} by ${playlist.songs[playlist.indexOfSong].artist}`
        } else {
          return `No more songs in the playlist, playing the first song:  ${playlist.songs[0].title} by ${playlist.songs[0].artist}`
        }
      },
      stop: function() {
        playlist.isPlaying = false;
        return `${playlist.songs[playlist.indexOfSong].title} by ${playlist.songs[playlist.indexOfSong].artist} stopped`
      }
    };
    return playlist;
  }
  
  function Song(title, artist) {
    let song = {
      title: title,
      artist: artist
    };
    return song;
  }
  
  const song1 = Song('Song1', 'Artist1');
  const song2 = Song('Song2', 'Artist2');
  const song3 = Song('Song3', 'Artist3');
  const playlist = Playlist();
  console.log(playlist.add(song1));
  console.log(playlist.add(song2));
  console.log(playlist.add(song3));
  console.log(playlist.play());
  console.log(playlist.next());
  console.log(playlist.stop());
  console.log(playlist);