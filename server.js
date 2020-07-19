//DEPENDENCIES
var express = require("express");
var app = express();

//Configure Servier: Set Port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var allNotes = [];
var noteId = 0;

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
function assignNoteID(newNote) {
    newNote.id = noteId+1;
}

app.post("/api/notes/new", function(req, res) {
    var newNote;
    newNote.note = req.body;
    newNote.id = noteID+1;
    noteID++;
    allNotes.push(newNote);
    res.json(newNote);
    console.log(newNote);
    return newNote;
});

// DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.post("/api/notes/:id", function(req, res) {
    var newNote = req.body;
    allNotes.push(newNote);
    res.json(newNote);
    console.log(newNote);
    return newNote;
});

function findNotebyId(id) {
    var requestedNote;
    for (var i = 0; i < allNotes.length; i++) {
        if (id === allNotes[i].id) {
            requestedNote = allNotes[i]; 
            return requestedNote
        } else { 
            console.log("A note by this ID number was not found.")
        }
    }
}

app.delete('/api/notes/:id', function (req, res) {
    var requestedID = req.body;
    findNotebyId(requestedID); 

    res.send('Attempting to DELETE the note you requested.')
})



// Listener
// ===========================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});

