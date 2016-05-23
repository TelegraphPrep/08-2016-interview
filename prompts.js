// Interviewers, choose a problem from the options below:


// Inteviewees, remember to frame your problem into smaller problems. Know your input and expected output. Use your interviewer as your Google or Stack Overflow



/*

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Return true if the given string is a palindrome. Otherwise, return false.

palindrome("race CAR"); // true

*Note*:
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)

*/


var isPalindrome = function(str) {
  // Your Code Here
}



/**********************************************************************************************************/



/*
findPrimes takes a collection of numbers and returns only the numbers that are Prime.

var somePrimes = [7, 22, 9, 13, 71, 39];
var onlyPrimes = findPrimes(somePrimes);
console.log(onlyPrimes) --> [7, 13, 71];

*/


var findPrimes = function(collection){
    // Your Code Here

};




/*********************************************************************************************************************/


/*
  
  Create a Mad Libs word game function that will create a 
  "Fill in the Blanks" style sentence.

  Use the native Reduce method to solve this problem

  wordBlanks("Kristina", "fancy", "laugh", "Deliberately"); // Kristina fancy laugh Deliberately
  
*/



var wordBlanks = function(myNoun, myAdjective, myVerb, myAdverb) {
  // Your Code Here
}





/*************************************************************************************************************************/




/*

  Return a string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
  
  titleCaseString("Shanna can do a handstand, Kristina can't"); // Shanna Can Do A Handstand, Kristina Can't

  
*/


var titleCaseString = function (string) {
  //Your Code Here
}  
  



/****************************************************************************************************************************/



/*

collectKeys takes a collection and returns an array filled with all of they keys inside of the collection.

var obj = {course: 'Telegraph Prep+', best: true};
collectKeys(obj) --> ['course', 'best'];

*/


var collectKeys = function(collection){
  // Your Code Here
};

/*******************************************************************************************/


/*
  
  Truncate a string (str- first argument) if it is longer than the given maximum string length (num- second argument). Return the truncated string with a "..." ending.

  Note that the three dots at the end add to the string length.

  If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

  truncate("A-tisket a-tasket A green and yellow basket", 11); //"A-ticket..."


*/


var truncate = function(str, num) {
  // Your Code Here
  
}




/*********************************************************************************************************************/


/*

Create a function named `first` that takes in an array as the first parameter and returns the first element in the array.

Your function also takes in a number as an optional second parameter. If a number is passed in as the second argument, you must return that number of elements in the array.


Example:

var nums = [1, 2, 3, 4, 5];

var getFirstNum = first(num) 

console.log(getFirstNum) // 1

var getFirstTwoNums = first(num, 2);

console.log(getFirstTwoNums) // [1, 2]


*/

var first;



/*********************************************************************************************************************/



/*
Create a function named `last` that takes in an array as the first parameter and returns the last element in the array.

Your function also takes in a number as an optional second parameter. If a number is passed in as the second argument, you must return that number of the last elements in the array. 

Example:

var nums = [1, 2, 3, 4, 5];

var getLastNum = last(num) 

console.log(getLastNum) // 5

var getLastTwoNums = last(num, 2);

console.log(getLastTwoNums) // [4, 5]
*/

var last;



/*********************************************************************************************************************/




/*


Takes in two parameters, an object and a target, and returns the target if it corresponds with a property inside of the object.

If not, it returns 'target not found' to the user.



*/


var pluckTargetFromObject;


/*********************************************************************************************************************/



/*

Takes in an object, property, and value as parameters and adds the property and value to the object.
If the property already exists, overwrite it's current value with the new value.
Return the object to the user.


*/

var addPropertyAndValue;


/*********************************************************************************************************************/



/*

sumArray is a functions that takes in an array of numbers and returns the sum of all the numbers that are in the array

*/

var sumArray;



/*********************************************************************************************************************/



/*

allNumbersEven is a function that takes in an array of numbers as a parameter

Iterates through an array and returns true is every number is even

Otherwise return false

*/

var allNumbersEven;

