let tulos =0 ;
let arvo

do {
    arvo = parseInt(prompt("num"))
    tulos  += arvo;

}while (arvo > 0);


h2 = document.createElement("h2")
h2.innerHTML="sum is " + tulos
document.body.appendChild(h2);