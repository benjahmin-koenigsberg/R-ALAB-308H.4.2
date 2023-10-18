const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

/*

Tasks
People move location frequently. Create a new function moveLocation().

moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
The location object will have the properties city, state, and zip.
The function should change the city, state, and zip properties of the person to match those of the new location.

*/

const moveLocation = (personObj, locationObj) => {

    personObj.location = locationObj;

    return personObj;
}


//Test your function by using the following code.
//Does personTwo now live in Rochester ? (They should.)

// const nLoc = {
//     city: 'Rochester',
//     state: 'New York',
//     zip: 14604
// }

//moveLocation(personTwo, nLoc);
//console.log(personTwo);

// nLoc.city = 'Buffalo';
// nLoc.zip = 14201;

//console.log(personTwo.location.city);

const nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLoc);
moveLocation(personTwo, nLoc)
// console.log(personOne)
// console.log(personTwo)
/*


Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.

Set Julie's location to Timmy's location by reference.
Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)
const nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}


As you can see, sometimes linking objects by reference is useful. Now, whenever one person moves, the other follows.


*/

// The happy couple are having a baby! Create a new object personThree.
const personThree = {
    name: {
        first: 'Kaya',
        last: personOne.name.last + "-" + personTwo.name.last
    },
    age: 0,
    location: {},
}

moveLocation(personThree, nLoc);
//console.log(personThree);

personOne.age += 20
personTwo.age += 20;
personThree.age += 20;

const locCopy = personThree.location;

moveLocation(personThree, {
    city: 'New York City',
    state: 'New York',
    zip: 10024
})

// console.log(personThree.location)
// console.log(locCopy)
/*



Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
Give personThree an age of 0.
Set personThree's location to that of their parents, by reference so that the baby stays with its family.
Test your code's behavior by using your moveLocation() function.
Years go by, and personThree is ready for a life of independance.

Increment everyone's age values by 20.
Create a copy of personThree's location that breaks the reference to the current location object, and set their location to that copy.
Test your code by having personThree moveLocation() somewhere of your choosing. Does this change the locations of personOne or personTwo? (It shouldn't.)
Welcome to the future! We've invented both immortality and cloning.

Increment everyone's age values by 300.
Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age set to 0.
These are all independant clones, so each should be able to move to its own location. Test your code by creating several clones of our persons and using moveLocation() to send them elsewhere. Are these locations unaffected by each other? (They should be.)
Check the age values of your original persons to make sure you did not accidentally set them to 0!
The hive mind has taken over... Create a new object called thoughts and give it some properties.

Set personOne.thoughts to your thoughts object by reference.
Do this for all of your persons and clones, such that changing the original thoughts object modifies the .thoughts property of every person.
Test your code by modifying everyone's thoughts with a single line of code. Pass by reference is powerful.

*/


personOne.age += 300
personTwo.age += 300;
personThree.age += 300;

const clonePerson = (personObj) => {
    const clone = {}
    clone.age = 0;
    clone.name = personObj.name;
    clone.location = personObj.location
    return clone;
}

const cloneOne = clonePerson(personOne);
const cloneTwo = clonePerson(personTwo)



moveLocation(cloneOne, { city: 'lalala', state: 'CA', zip: 99999 })

// console.log(personOne)
// console.log(cloneOne);
console.log(cloneTwo)

const myThoughts = "not sure how this will be applicable to an actual job";


personOne.thoughts = myThoughts;
personTwo.thoughts = myThoughts;
personThree.thoughts = myThoughts;
cloneOne.thoughts = myThoughts;

console.log(personOne, cloneOne);
