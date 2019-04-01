var allLines = [];

function addLine() {
    let startPoint = document.getElementById('startPoint').value;
    let endPoint = document.getElementById('endPoint').value;
    let stops = document.getElementById('stops').value;
    let duration = document.getElementById('duration').value;
    let price = document.getElementById('price').value;
    let distance = document.getElementById('distance').value;

    let dataForLine = [startPoint, endPoint, stops, duration, price, distance];
    allLines.push(dataForLine);

    var tableRef = document.getElementById('lines').getElementsByTagName('tbody')[0];

    var newRow = tableRef.insertRow();

    for (let i = 0; i < dataForLine.length; i++) {
        var newCell = newRow.insertCell(i);
        var newText = document.createTextNode(dataForLine[i]);
        newCell.appendChild(newText);
    }

    var removeButton = newRow.insertCell();
    removeButton.innerHTML = `<button id="${allLines.length - 1}" onclick="removeLine(this.id)">Remove line <i class="fa fa-trash" aria-hidden="true"></i></button>`;


    event.preventDefault();
}
function removeLine(position) {
    console.log(position)
    allLines.splice(position, 1);
    document.getElementById('lines').deleteRow(position)
}