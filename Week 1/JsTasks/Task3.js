let l1 = prompt("What is the lengths of the first side ?")
let l2 = prompt("What is the lengths of the second side ?")
let l3 = prompt("What is the lengths of the third side ?")
let result
if (l1 === l2 && l2 === l3) {
     result = "all sides are equal";

}
else if ((l1 ===l2 && l2 !== l3) || (l1 !==l2 && l2 ===l3) || (l1 ===l3 && l2 !==l3) ) {
     result = "two sides are equal";

}
else if (l1 !==l2 && l2 !== l3) {
     result = "no sides are equal";
}
h2= document.createElement("h2")
h2.innerHTML = result
document.body.appendChild(h2);