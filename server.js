//DEPENDENCIES
var express = require("express");
var app = express();

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


var allNotes = [];
var noteId = 0;

// //ROUTES WITH REQUEST & RESPONSE HANDLERS
// The following HTML routes should be created:
// GET /notes - Should return the notes.html file.

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "\public\index.html"))
   })

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
   }) 

console.log(__dirname, "/public/index.html");

// Listener
// ===========================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});