const allLines = [{
    id: '0'
}, {
    id: '1'
}];

function addLine() {
    const startPoint = document.getElementById('startPoint').value;
    const endPoint = document.getElementById('endPoint').value;
    const stops = document.getElementById('stops').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const distance = document.getElementById('distance').value;

    const dataForLine = [startPoint, endPoint, stops, duration, price, distance];
    const id = new Date().getTime();

    allLines.push({
        dataForLine,
        id
    });

    const tableRef = document.getElementById('lines').getElementsByTagName('tbody')[0];

    const newRow = tableRef.insertRow();

    dataForLine.forEach((currData, i) => {
        const newCell = newRow.insertCell(i);
        const newText = document.createTextNode(currData);
        newCell.appendChild(newText);
    })

    const removeButton = newRow.insertCell();
    removeButton.innerHTML = `<button id="${id}" onclick="removeLine(this.id)">Remove line <i class="fa fa-trash" aria-hidden="true"></i></button>`;


    event.preventDefault();
}

function removeLine(id) {
    const idx = allLines.findIndex(line => `${line.id}` === `${id}`)
    allLines.splice(idx, 1);
    document.getElementById('lines').deleteRow(idx + 1)
}