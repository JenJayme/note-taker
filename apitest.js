

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

apiRequest(note);

console.log("Running test on "+ note.title);
