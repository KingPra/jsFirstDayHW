console.log('js homework');

/**
 * The Tallest Mountain

Create an array that contains a bunch of numbers representing the heights of various mountains. Write some code that identifies the height of the tallest of the available mountains and prints it out.

 */
console.log('Tallest Mountain')


let mtn = [1200, 12205, 4000, 7600];
let tallest = 0;
for (let i = 0; i < mtn.length; i++) {
    if (tallest < mtn[i]) {
        tallest = mtn[i];
    
       }  
}
console.log(tallest);

/**
 * Hangman Lite

Create a variable called word that contains a hangman word, and create a second variable called letter that indicates the letter that the player guessed. Print out "Yeah, the letter x exists y times in my word" if the letter exists (but substitute the actual letter and the number of times). If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."
*/

console.log('Hangman Lite')

let word = 'his';
let letter = 't'; 
let count = 0;

for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
        count++;
    }
} 
if (count === 0) { 
    console.log('Nope, letter '+letter+' doesn\'t exist in my word');
} else if (count === 1) {
   console.log('Yeah, the letter '+letter+' exists '+count+ ' time in my word.');
}else console.log('Yeah, the letter '+letter+' exists '+count+ ' times in my word.');




/** 
Cherokee Hare

There's a mythical species of rabbit called the Cherokee Hare that can reproduce at variable rates and never seem to die. Fortunately, some engineers figured out to write some code to describe it's future population. Wildlife experts rejoice! Create a variable called startingPopulation that keeps track of the initial population of hares, a variable called birthRate that keeps track of what percentage is born each week, and a variable called numberOfWeeks that represents how long we're trying to simulate. Print out "There will be x Cherokee Hares after y weeks" but replace x with the number of hares and y with the number of weeks.

Note: it's common practice to represent rates (like the birth rate) as decimal values, i.e. 10% would be 0.1 instead of 10.

For example, if:

let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
... then you're trying to figure out how many hares will exist after five weeks if we start off with 200 and increase their population by 10% each week.

*/

console.log('Cherokee Hare')


let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;
for (let i = 0; i < numberOfWeeks; i++) {
    startingPopulation = startingPopulation + (startingPopulation * birthRate);
}

console.log('There will be '+Math.floor(startingPopulation)+' Cherokee Hares after '+numberOfWeeks+' weeks');




/*

Change machine

Imagine we have a very versatile change machine. Create a variable called amount stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).

*/
console.log('Change Machine');



let amount = 234;
let change = [];

change [0] = Math.floor(amount / 20);
amount = amount % 20;

change [1] = Math.floor(amount / 10);
amount = amount % 10;

change [2] = Math.floor(amount / 5);
amount = amount % 5;

change [3] = Math.floor(amount);


console.log(change);



/*
Finding palindromes

Create a variable called word that stores a word we want to test as a palindrome. Write some code that prints out "true" if word is a palindrome, or "false" if its not.
*/

console.log('Finding Palindromes');


let words = 'raeat';
let back = words.length - 1;
for (let i = 0; i < words.length; i++) {
    if (words[i] === words[back - i]) {
   console.log(true); 
} else if (words[i] !== words[back - i]) {
    console.log(false);
}
}


/** 
Hard mode

Create a variable called count that keeps track of the length of the desired array. Write some code that generates the first count numbers in the Fibonacci sequence.
 */


console.log('Fibonacci');




let runTime = 5
//let startNum = 1;
//let ansOne = 1;
//let ansTwo = [];
let a = [];
let b = 1;
let c = 1;
    a = b + c;
for (i = 0; i< runTime; i++) {
    //ansTwo = startNum + ansOne; 
    //ansOne = ansOne + ansTwo;
    //ansTwo = ansTwo + ansOne;
    c = a + b;
    console.log(c)
    b = c + a;
    console.log(b)
    a = b + c;
    console.log(a);
    
}

//counter ()
/**
 * 1. var runTime for how long the loop runs
 * 2. var startNum for the starting point (1)
 * 3. var ansOne for the first answer
 * 4. var ansTwo for the second answer
 * 5. add startNum to itself and use ansOne to store the answer ansOne = startNum + startNum
 *                                                                   2 = 1 + 1
 * 6. add startNum to ansOne and store the answer in ansTwo. ansTwo = startNum + ansOne
 *                                                                3 = 1 + 2
 * 7. add ansOne to ansTwo and store new answer in ansOne .  ansOne = ansTwo + ansOne
 *                                                                5  = 3 + 2 
 * 8. repeat 7 for the remainder of the loop                  ansOne = ansTwo + ansOne
 *                                                                8  = 3 + 5
 * 9. Need to find a way to update ansTwo                         11 = 3 + 8
 */
