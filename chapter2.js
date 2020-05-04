/*Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

for(let str = "#"; str.length < 8; str += "#") console.log(str);

/*Write a program that uses console.log to print all the numbers from 1 to 100, with two 
excaptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers 
divisbile by 5 (and not 3), print "Buzz" instead.

When you have that working modify your program to print "FizzBuzz" for numbers that are divisivle
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for(let num = 1; num <= 100; num++) {
    let output = "";
    if(num % 3 === 0 && num % 5 ===0) output = "FizzBuzz";
    if (num % 3 === 0) output = "Fizz";
    if (num % 5 === 0) output = "Buzz";
    console.log(output || num);
};

/*
Write a program that creates a string that represents an 8X8 grid, using new line characters 
to separate lines. At each position of the grid there is either a space or a # character. 
The characters should form a chessboard.

Passing theis string to console.log should show something like this.
*/

let size = 8;
let board = "";

for(let x = 0; x < size; x++) {
    for(let y =0; y < size; y++){
        if((x + y) % 2 === 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"
}

console.log(board);
