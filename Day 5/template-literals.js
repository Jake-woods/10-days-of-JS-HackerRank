'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
   inputString += inputStdin;
});

process.stdin.on('end', _ => {
   inputString = inputString.trim().split('\n').map(string => {
      return string.trim();
   });

   main();
});

function readLine() {
   return inputString[currentLine++];
}

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
   const A = expressions[0];
   const P = expressions[1];
   const s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
   const s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;

   let arr = [s1, s2];
   arr = arr.sort((a, b) => a - b);

   return arr;
}