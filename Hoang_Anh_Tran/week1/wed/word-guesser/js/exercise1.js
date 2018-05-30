// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word
//(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
//and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
const answer = ["h", "e", "o" ];
const guessed = ["_", "_", "_"];

const guessedLetter = function (letter) {

  let foundMatch = false;

  for (let i = 0; i < answer.length; i++){
    if( letter === answer[i] ) {
      guessed[i] = answer[i];
      console.log(`You found "${letter}"`);
      console.log(guessed);
      foundMatch = true;
    }
  } // end of for loop

  if (foundMatch === false) {
    console.log(`Sorry you found no match for ${letter}`);
  }

}; // end of guessedLetter()

console.log(guessedLetter("x"));
console.log(guessedLetter("h"));
console.log(guessedLetter("k"));

//
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter
//(multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
//
// ---
//
// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwo = function (num1, num2) {
  if (num1 - num2 === 0) {
    console.log("The numbers are even");
  } else if (num1 - num2 > 0) {
    console.log(`the larger number is ${num1}`);
  } else {
    console.log(`the larger number is ${num2}`);
  }
};

maxOfTwo(10, 12);


// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
const maxOfThree = function (num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(`the largest number is ${num1}`);
  } else if (num2 >= num1 && num2 >= num3 ) {
   console.log(`the largest number is ${num2}`);
  } else if (num3 >= num1 && num3 >= num2) {
   console.log(`the largest number is ${num3}`);
  }
};

maxOfThree(10, 2, 102);
maxOfThree(10, 10, 3);
maxOfThree(-10, 10, 100);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = ["u", "e", "o", "a", "i"];
foundVowel = false;

const checkVowel = function (aLetter) {
  for (let i = 0; i < vowels.length; i++) {
    if ( aLetter === vowels[i] ) {
      console.log("true");
      foundVowel = true;
    }
  } //end of loop

  if (foundVowel === false) {
    console.log("false");
  }
}; // end of function



console.log(checkVowel("m"));
console.log(checkVowel("e"));
console.log(checkVowel("o"));




// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers.
//For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
//

const sumArray = function(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    total += input[i];
  }
  return total;
};
console.log(sumArray([1, 3, 5, 10]));


const multipleArray = function(input) {
  let total = 1;
  for (var i = 0; i < input.length; i++) {
    total = total * input[i];
  }
  return total;
}
console.log(multipleArray([1, 2, 3, 5]));

// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string.
//For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = function (string) {
  return string.split("").reverse().join(""); // convert to array, change the position, rejoin

};
console.log(reverseString("hello world"));
console.log(reverseString("random people"));




// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = function(input) {
  let longestWord = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i].length > longestWord.length) {
      longestWord = input[i];
    }
  }
  return longestWord;
};


console.log(findLongestWord(["hello", "space", "breathtaking", "presumption"]));

// 7. Write a function `filterLongWords` that takes an array of words and a number `i`
//and returns the array of words that are longer than i.

const filterLongWords = function(input, num) {
  let longWord = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i].length > num) {
      longWord.push(input[i]);
    }
  }
  return longWord;
};


console.log(filterLongWords(["pig", "chicken", "cow", "camel", "elephant"], 4));
