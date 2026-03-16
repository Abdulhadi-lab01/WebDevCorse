x1 = prompt("first plane X")
y1 = prompt("first plane y")
x2 = prompt("secound plane X")
y2 = prompt("secound plane y")
Distance = (Math.sqrt(((x2 - x1)^2 + (y2 - y1)^2))).toFixed(2)
let h2 =document.createElement("h2")
h2.textContent ="Distanse is "+ Distance ;
document.body.appendChild(h2);

