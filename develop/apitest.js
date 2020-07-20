<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var note = {
    title: 'One More Dummy Note',
    text: "Here's another note to test"
}

function apiRequest () {
    $.ajax({
        url: "/api/notes",
        data: note,
        method: "GET"
    }).then(function (response) {
        var noteListItems = response.data;
        if (!noteListItems) {
            console.log("No list items found.");
            return;
        } else {
            console.log(response.data);
            return noteListItems
        }
    })
}

console.log("Running test on "+ note.title);


$(document).ready(function(){
    
    apiRequest(note);
  
  });