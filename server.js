//DEPENDENCIES
const fs = require('fs');
const express = require("express");
const app = express();

// More easily interact with the body of requests
var bodyParser = require("body-parser")

// Create relative paths to our htmls and public files
var path = require("path")

//Configure Server: Set Port
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets from public
app.use(express.static(__dirname + "/public"));

// ===========================================================

var newNote;
var noteId = 0;
var allNotes = [];

// ===========================================================

// //ROUTES WITH REQUEST & RESPONSE HANDLERS
// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
    // return res.json(gatherNotes())
   }) 

   
// POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    newNote = req.body
    // assignNoteID(newNote);
    fs.writeFile('/db/db.json', newNote, function (err) {
        if (err) throw err;
        console.log('Encountered an error trying to append file.');
        res.json(newNote);
        console.log('New note appended: ' + newNote);
        return newNote;
    });
});

// ===========================================================

function assignNoteID(newNote) {
    newNote.id = noteId+1;
    noteId++;
}

function gatherNotes() {
    var rawNotes = fs.readFileSync(path.join(__dirname, "/db/db.json"))
    return JSON.parse(rawNotes)
}

function addNote(newNote) {
    var notes = gatherNotes()
    var newId = getNextId(notes)
    console.log(newId)
    newNote['id'] = newId
    notes.push(newNote)
    updateNotes(notes)
}

function updateNotes(updated) {
    fs.writeFile(path.join(__dirname, "db", "db.json"), JSON.stringify(updated), err => {
        if (err) throw err
    })
}

function getNextId(allNotes) {
    var ids = getAllIds(allNotes)
    if (ids.length === 0) {
        return 1
    }
    else {
        var max = Math.max(...ids)
        return max + 1
    }
}

function getAllIds(allNotes) {
    var AllIdsArr = [];
    for (var i=0; i<allNotes.length; i++) {
        AllIdsArr.push(allNotes[i].id)
    }

    return AllIdsArr
}



// ===========================================================



// Listener
// ===========================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});