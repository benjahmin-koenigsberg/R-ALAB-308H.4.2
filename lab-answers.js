// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i<20; i++){
   // console.log(i);
}

// The commit message should read: "Easy Going answered"


// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i<200; i+=2){
   // console.log(i)
}

// Hint: Think about the increment expression.

// The commit message should read: "Get Even answered"


// Fizz Buzz
// This is a classic problem that you should get really comfortable solving.If you've solved it before, try to make it more elegant and shorter.

// Write a Javascript Application that logs all numbers from 1 - 100.
for (let i =1; i<=100; i++){
    // If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
if ( i % 3 === 0 && i % 5 === 0 ){
   // console.log("FizzBuzz");
}
    // If a number is divisible by 3, log "Fizz" instead of the number.
if ( i % 3 === 0){
   // console.log("Fizz");
}
    // If a number is divisible by 5, log "Buzz" instead of the number.
if ( i % 5 === 0){
   // console.log("Buzz");
}
}

// The commit message should read: "Fizz Buzz answered"


// Wild Wild Life
// Use the following arrays to answer the questions below(name, species, age, hometown).

// You should be modifying the elements by accessing them.It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001
//console.log(plantee)
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
//console.log(wolfy)
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
//console.log(dart)
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy"
// The commit message should read: "Wild Wild Life answered"


// Yell at the Ninja Turtles

// Create an array with the members of the ninja turtles(Donatello, Leonardo, Raphael, Michaelangelo).
const ninjaTutrles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// Use a for of loop to call toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninjaTutrles.length; i++){
   // console.log(ninjaTutrles[i].toUpperCase());
}
//     Haven't heard of for of loops?

// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own.You've got this!

// The commit message should read: "Yell at the Ninja Turtles answered"


// Methods, Revisited
// Here is a list of favorite movies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log the index of Titanic.
//console.log(favMovies.find(movie=>movie==='Titanic'))
// Do the following and console.log the final results. (I have included some thought questions; you don't have to write out an answer for those marked as such).

// Note: if you have to add to the array, feel free to add any movie you'd like.
favMovies.push('Vegucated')
// Use the.sort method.
//console.log(favMovies)
favMovies.sort()
//console.log(favMovies)
// Thought Question: What did this do to the array ? Did it permanently alter it ?

//yes it changed the order of movies

//     Use the method pop.
favMovies.pop()
//         push "Guardians of the Galaxy".
favMovies.push("Gauridans of the Galaxy")
// Reverse the array.
favMovies.reverse()
// Use the shift method.
favMovies.shift()
//     unshift - what does it return?
// returns the new length of the array.

//splice "Django Unchained" and add "Avatar"(try finding the index of "Django Unchained" instead of counting it yourself).
const DUId = favMovies.indexOf("Django Unchained")
favMovies.splice(DUId, 1, "Avatar");
//console.log(favMovies)
// Thought Question: Did this permanently alter our array ?
//yes

//     slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
const halfId = Math.ceil(favMovies.length / 2);
//console.log(halfId)
const halfArr = favMovies.slice(halfId, favMovies.length)
//console.log(halfArr)
// Thought Question: Did this permanently alter our array ?

//no

//     Store the value of your slice in a variable and console.log it.
//const halfArr = favMovies.slice(halfId)
//console.log(halfArr)
// Thought Question: What is going on here ?
//console.log("The slice() method returns a new copy of the origanl cut to whatever length specified from args or a whole copy without any args")
//     console.log your final results.
// After running the above tasks, console.log the index of "Fast and Furious."
//console.log(favMovies.indexOf("Fast and Furious"))
// We removed it from the array.What value do we get when we look for the index of something that is not in the array ?

// I believe I followed the instruction although Fast and Furious are still in my array?

//     Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array.Weird?Should we have used let?

// Because we were mutating or copying the array vs re assigning it

//    The commit message should read: "Methods Revisited answered"


// Where is Waldo
// With the following multi - dimensional array:

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert(hint look at the slice / splice methods).

whereIsWaldo.splice(1,1)
//console.log(whereIsWaldo.splice(1,1))
//console.log(whereIsWaldo)

//     Change "Neff" to "No One".
whereIsWaldo[1][2] = "No One"
//console.log(whereIsWaldo)
// Access and console.log "Waldo".
const Waldo = whereIsWaldo[2][1][1]
//console.log(Waldo)
// The commit message should read: "Where is Waldo answered"


// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random.
const catSayings = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?"];

function random_item(items) {
  return  items[Math.floor(Math.random() * items.length)]
}

let count = 0
while (count < 20){
   console.log("Love me, pet me! HSSSSSS!")
   console.log(random_item(catSayings))
    count++;
}

// The commit message should read: "Excited Kittens answered"


// Find the Median
// Find the median number in the following nums array, then console.log that number.

//     Hint: If you check the length of the array divided by two, you might get not get a whole number.In which case, look into Math.floor().
// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// // Expected output: 15
// The commit message should read: "Find the Median answered"


// Hungry for More ?
//     The remainder of these problems are optional; however, we encourage more practice whenever you have the time for it!

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.Use this data to answer the following questions.

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer!

// Remove Kristyn's shoe from the array and save it to the variable kristynsShoe.
// Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// The commit message should read: "Kristyn's lost shoe found"


// Dress Us Up
// Modify your code to put together three separate outfits for Kristyn and Thom.Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// The commit message should read: "Kristyn and Thom have their outfits ready for class - array practice"


// Dirty Laundry
// Time to do laundry.Loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

// The commit message should read: "Washed dirty laundry"


// Inventory
// Thom wants to do inventory on his closet.Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

// The commit message should read: "Hungry for More: Complete"
