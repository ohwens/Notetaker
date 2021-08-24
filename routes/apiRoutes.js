const notesDB = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

module.exports = (app) => {


    app.get("/api/notes", (req, res) => {
        const notesList = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(notesList)
    });

    app.post('/api/notes', (req, res) => {
        const notesList = JSON.parse(fs.readFileSync('./db/db.json'));
        const newNote = req.body;
        newNote.id = uuid.v4();
        notesList.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesList));
        res.json(newNote);
    });
}
