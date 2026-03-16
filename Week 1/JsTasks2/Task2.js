 let numbers = []
 let numb
 for (let i = 0; i < 5; i++) {
     numb = parseInt( prompt("Enter a number"));
     numbers.push(numb);
 }
 console.log("numbers: "+ numbers);

 let ask = parseInt( prompt("Serch for  a number"));
 if (numbers.includes(ask)){
     console.log("Number "+ask +" is found in the array.")
 }else {
     console.log("Number "+ask+" is not in the array.")
 }
 numbers.pop()
 console.log("Updated Numbers "+numbers)
 console.log("Sorted Numbers :"+numbers.sort());