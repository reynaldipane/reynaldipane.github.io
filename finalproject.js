function formProcess() {
    var notes = document.getElementById('notes');
    var notesVal = notes.value;

    if (notesVal === "") {
        alert("Please fill your note first !");
    } else {
        var tableNotes = document.getElementById('tablenotes');
    
        var lastTableRow    = tableNotes.rows.length;
        var newRow     = tableNotes.insertRow(lastTableRow);
    
        // newRow.setAttribute('onclick', 'deleteNotes(this)');
        var titleCell  = newRow.insertCell(0);
        var actionCell = newRow.insertCell(1);
    
        titleCell.innerHTML = notesVal;
        actionCell.innerHTML = '<a href="#" onclick="deleteNotes(this)">delete</a> <br> <a href="#" onclick="markAsDone(this)">Mark as DONE</a>';
    
        notes.value = "";    
    }
}

function deleteNotes(x) {
    var row = x.parentNode.parentNode.rowIndex;
    var tableNotes = document.getElementById('tablenotes');
    tableNotes.deleteRow(row);
    alert('Notes deleted !');
}

function markAsDone(x) {
    var row = x.parentNode;
    row.innerHTML = "You have done this task ! " + '<br> <a href="#" onclick="deleteNotes(this)">delete</a> <br> <a href="#" onclick="markAsUnDone(this)">Mark as UNDONE</a>'; ;
}

function markAsUnDone(x) {
    var row = x.parentNode;
    row.innerHTML = '<a href="#" onclick="deleteNotes(this)">delete</a> <br> <a href="#" onclick="markAsDone(this)">Mark as DONE</a>';
}