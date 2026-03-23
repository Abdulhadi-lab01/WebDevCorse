let target = document.getElementById('target');

const numofmovis =  prompt("elokovien luku määrä")
const moves =[]
for (let i = 0; i < numofmovis; i++) {
    const nimis = prompt("name ")
    const arvos = prompt("elokovien arvo")
    moves.push({
        nimi: nimis,
        arvo: arvos
    })
}
moves.sort(function (a,b)
{ return  b.arvo-a.arvo;});
for (let i=0 ; i<moves.length; i++) {
    target . innerHTML += `<li>name ${moves[i].nimi} arvo ${moves[i].arvo }</li>`
}
document.getElementById("higest").insertAdjacentHTML("afterbegin",moves[0].nimi)
