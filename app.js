console.log("Starting the app.");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('command: ', command);
//console.log('Yargs:', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note added: ', note.title);
  } else {
    console.log('Note title already exists.');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`$There are ${allNotes.length} notes.`);
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note title: " + note.title);
    console.log("Note body: " + note.body);
  } else {
    console.log("Note not found.");
  }
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized.');
}
