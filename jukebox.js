var parseSong = function(songString, repeatFunction) {
    var parseNote = function(string) {
      var noteBreakdown = string.split("*");
      var note = {
        pitch: noteBreakdown[0],
        beats: 1
      };
      if (noteBreakdown[1] === undefined) {
        note.beats = 1;
      } else {
        note.beats = noteBreakdown[1];
      }
      return note;
    };

    var songArray = songString.split(" ");
    for(i = 0; i < songArray.length; i++) {
      var note = parseNote(songArray[i]);
      songArray.splice(i, 1, note);
    }
    return songArray;
  };
  var onComplete = function () {
     console.log('Song finished playing');
     var song = prompt("Enter a song to play. Separate your notes with a space and use a * to indicate number of beats.");
     var bpm = prompt("How many beats per minute?");
     var mySong = parseSong(song);
     playSong(mySong, bpm, onComplete);
  };

  var song = (prompt("Enter a song to play. Separate your notes with a space and use a * to indicate number of beats.")).toUpperCase();
  var bpm = prompt("How many beats per minute?");

  var mySong = parseSong(song);
  playSong(mySong, bpm, onComplete);
