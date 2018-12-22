// var obj = {
//   name: 'Andrew'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');
var originalNote = {
  title: "Some title",
  body: "some body"
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(note.title);
console.log(note.body);
