console.log('js homework');

/**
 * The Tallest Mountain

Create an array that contains a bunch of numbers representing the heights of various mountains. Write some code that identifies the height of the tallest of the available mountains and prints it out.

 */


let mtn = [1200, 12205, 4000, 7600];
let tallest = 0;
for (i = 0; i < mtn.length; i++) {
    if (tallest < mtn[i]) {
        tallest = mtn[i];
    
       }  
}
console.log(tallest);

/**
 * Hangman Lite

Create a variable called word that contains a hangman word, and create a second variable called letter that indicates the letter that the player guessed. Print out "Yeah, the letter x exists y times in my word" if the letter exists (but substitute the actual letter and the number of times). If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."
*/

let word = 'his';
letter = 't'; 
count = 0;

for (i = 0; i < word.length; i++) {
    if (letter === word [i]) {
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

Change machine

Imagine we have a very versatile change machine. Create a variable called amount stores a quantity of dollars, and write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

After your code runs you should have a new array of the format [twenties, tens, fives, ones]. For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).

Finding palindromes

Create a variable called word that stores a word we want to test as a palindrome. Write some code that prints out "true" if word is a palindrome, or "false" if its not.

Hard mode

Create a variable called count that keeps track of the length of the desired array. Write some code that generates the first count numbers in the Fibonacci sequence.
 */