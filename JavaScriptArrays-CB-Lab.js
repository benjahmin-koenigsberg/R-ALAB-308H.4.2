const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];



// Every

// Determine if every number is greater than or equal to 0.
nums.every( num => num >= 0);
// Determine if every word shorter than 8 characters.
panagram.every(word=>word.length < 8);
//testing
console.log(panagram.every(word => word.length < 8));


// Filter

// filter the array for numbers less than 4.
const filteredNumArray = nums.filter(num=>num<4);
// Filter words that have an even length.
const filteredWordArray = panagram.filter(word=>word.length%2===0);
//test
//console.log(filteredNumArray);
console.log(filteredWordArray)

//     Find

// Find the first value divisible by 5.
const foundNumArray = nums.find(num=>num%5===0);
// Find the first word that is longer than 5 characters.
const foundWordArray = panagram.find(word=>word.length>5);

//test
console.log(foundWordArray)

// Find Index

// Find the index of the first number that is divisible by 3.
foundNumId = nums.findIndex(num=>num%3===0);
// Find the index of the first word that is less than 2 characters long.
foundWordId = panagram.findIndex(word=>word.length<2);
//test

console.log(foundNumId, " : " , foundWordId);
//-1 becasue this index / condition does not exisit in this array


// For Each

// Log each value of the array multiplied by 3.
//nums.forEach(num=>console.log(num*3));

// Log each word with an exclamation point at the end of it.
//panagram.forEach(word=>console.log(word+'!'));


// Thought Questions

// What happened to the original array ?
console.log(panagram);
//Can you store the values from a forEach method in a new array ?
//const newArr = nums.forEach(num=>num+1);
//console.log(nums)

//No, I can't seem to be able to store values from forEach in a new array


//         Map
// Make a new array of each number multiplied by 100.
const newNumArr = nums.map(num=>num*100);
// Make a new array of all of the words in all uppercase.
const newWordArr = panagram.map(word=>word.toLocaleUpperCase());
// Thought Questions
//console.log(newNumArr + " : " + newWordArr);

// What happened to the original array ?
console.log(nums)
//the orginal array seems to be unchanged

// Can you store the values from a map method in a new array ?
//YES!!!

//         Some
// Find out if some numbers are divisible by 7.
const someNumArr = nums.some(num=>num%7===0)
// Find out if some words have the letter a in them.
const someWordArr = panagram.some(word=>word.includes('a'));
//true
//console.log(someNumArr);
//console.log(someWordArr);


// Reduce

//test arr
//const numbers = [1,1,1,1,1];

// Add all of the numbers in the array together using the reduce method.
const sum = nums.reduce((a,b)=>a+b);
//test
//console.log(sum);


//    Concatenate all the words using reduce.
//const concatArr = panagram.reduce((a,b)=>a+b);
//console.log(concatArr)
//console.log(panagram.reduce((a,b)=>a+b));

//     Thought Questions

// What happened to the original array ?
//console.log(panagram);
//seems to be unchanged


//     Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
//console.log(nums.sort());

//not what expected

// Try to sort without any arguments, do you get what you'd expect with the words array?
//console.log(panagram.sort());

// Sort the numbers in ascending order.
//console.log(nums.sort((a,b)=>a>b));
// Sort the numbers in descending order.
//console.log(nums.sort((a,b) => -1 / 1));
// Sort the words in ascending order.
panagram.sort()
//console.log(panagram)
// Sort the words in descending order.
const sort1 = panagram.sort((a,b)=> {if (b>a) return 1});
const sort2 = panagram.sort((a, b) => { if (a>b) return 1 });

console.log(sort1)
console.log(sort2)



var x = 1;

    function foo() {

console.log(x);

     var x = 2;

}

foo();
