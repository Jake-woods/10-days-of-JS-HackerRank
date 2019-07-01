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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   const vowelsReg = /[aeiou]/ig;
   const consReg = /[bcdfghjklmnpqrstvxzwy]/ig;

   const vowels = s.match(vowelsReg);
   const consonants = s.match(consReg);

   vowels.forEach(item => console.log(item));
   consonants.forEach(item => console.log(item));
}


function main() {
   const s = readLine();

   vowelsAndConsonants(s);
}