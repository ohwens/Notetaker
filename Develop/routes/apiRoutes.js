const notesDB = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

module.exports = (app) => {


    app.get("/api/notes", (req, res) => {
        const notes = JSON.parse(fs.readFileSync('./db/db.json'));
        res.json(notes)
    });


}

