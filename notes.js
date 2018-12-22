console.log('starting notes.js');

// module.exports.addNote = () => {
//   console.log("adding Note");
//   return 'New note';
// };
const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  //console.log("notes ", notes);
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  //console.log("Getting note", title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  if (filteredNotes.length === 1) {
    return filteredNotes[0];
  }
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title );
  saveNotes(filteredNotes);
  return notes.length === filteredNotes.length;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
