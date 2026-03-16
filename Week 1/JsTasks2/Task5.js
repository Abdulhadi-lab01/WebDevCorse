import { sortArray } from './Task4.js';

let n = [1,2,3,5,7,6,8,9];

const ascending = sortArray(n, "asc");
console.log("Ascending:", ascending);

const descending = sortArray(n, "desc");
console.log("Descending:", descending);
console.log("Original:", n);