function Library(name, creator) {
  this.playlists = [];
  this.name = name;
  this.creator = creator;

  this.addPlaylist = function(newPlaylist) {
    this.playlists.push(newPlaylist);
  };
}

function Playlist(name) {
  this.tracks = [];
  this.name = name;
  this.addTrack = function(newTrack) {
    this.tracks.push(newTrack);
  };
  this.totalDuration = function() {
    return this.tracks.reduce(function(acc, val) {
      return acc + val.length;
    }, 0);
  };
  this.overallRating = function() {
    return this.tracks.reduce(function(acc, val) {
      return (acc + val.rating) / [val.tracks].length;
    }, 0);
  };
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const l01 = new Library("l01", "Alysia");
const l02 = new Library("l02", "Alysia");

const p01 = new Playlist("p01");
const p02 = new Playlist("p02");
const p03 = new Playlist("p03");

l01.addPlaylist(p01);
l02.addPlaylist(p03);
l02.addPlaylist(p02);

p01.addTrack(new Track("Exorciseur", 3, 5));
p01.addTrack(new Track("YoMama at my Burger", 4, 2.5));
p02.addTrack(new Track("Love Song", 1, 3));
p03.addTrack(new Track("I Hate You", 4, 1.75));
p03.addTrack(new Track("You Did it Now", 3, 2));
p03.addTrack(new Track("Rock'n Roll is Dead", 5, 1));
console.log(p03.totalDuration());
console.log(p02.overallRating());
//console.log(JSON.stringify(theLibrary);
