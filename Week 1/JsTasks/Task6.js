let tables = parseInt (prompt("Enter a positive integer:"))


let table = document.createElement("table")
let h2 = document.createElement("h2")
h2.innerHTML="Multiplication Table:"
document.body.appendChild(h2)
for (let i = 1; i <= tables; i++) {

    let row = document.createElement("tr");

    for (let j = 1; j <= tables; j++) {

        let cell = document.createElement("td");
        cell.innerHTML = i * j;

        row.appendChild(cell);
    }

    table.appendChild(row);
}
document.body.appendChild(table);