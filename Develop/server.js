const express = require('express');
const fs = require('fs');
const notes = require('./db/db.json');
const path = require('path');
const uuid = require('uuid');


// Tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });