let  grate = prompt("Corse Grates in total:");
let arvo ;
parseInt(grate)
if (grate <= 39) {
    arvo = 0
}
else if (grate >= 40 && grate<=51) {
    arvo = 1
}
else if (grate >= 52&& grate<=63) {
    arvo = 2
}
else if (grate >= 64&& grate<=75) {
    arvo = 3
}
else if (grate >= 76&& grate<=87) {
    arvo = 4
}
else if (grate >= 88) {
    arvo = 5
}
h2 = document.createElement("h2")
h2.innerHTML="Arvo sana " + arvo +" P"
document.body.appendChild(h2)