//DEPENDENCIES
var express = require("express");
var app = express();

//Configure Servier: Set Port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var allNotes = [];

// //ROUTES WITH REQUEST & RESPONSE HANDLERS
// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// GET * - Should return the index.html file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    return res.json(db.json);
    console.log(db.json)
  });

// POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes/new", function(req, res) {
    var newNote = req.body;
    allNotes.push(newNote);
    res.json(newNote);
    console.log(newNote);
    return newNote;

});

// Listener
// ===========================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});

