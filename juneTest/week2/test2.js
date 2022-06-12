// 1. for Loop

// The basic for loop has the following syntax:
// for (initialization; condition; update statement) {
//     // code block to be executed
// }

// The for loop statement basically uses three expressions:

// Initialization — to initialize the loop variable with a starting value and it will only be executed once
// Condition — defines when the loop will stop looping
// Update Statement — is executed every time after the code block within the loop has been executed. Normally it’s being used to increment the loop variable

// Example of using for loop:

var myArray = [
    { id: 1, name: 'John', age: 12 },
    { id: 2, name: 'Jane', age: 14 },
    { id: 3, name: 'Martin', age: 13 },
    { id: 4, name: 'Katie', age: 17 },
    { id: 5, name: 'Louis', age: 11 }
];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i].name);
}
 
console.log("************************************************************");
/*
Output:
    John
    Jane
    Martin
    Katie
    Louis
*/

// **************************************************************************************************

                              // 2. for/of Loop

// The for/of loop has the following syntax:

// for (variable of iterator) {
//     // code block to be executed
// }
// Iterator —refers to the array to be iterated
// Variable — The value of the next iteration (if any) will be assigned to the variable. Variable has to be declared with either const, let, or var to hold the value.

// Example of using for/of loop


var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

for (let profile of myArray) {
    console.log(profile.name)
}

console.log("************************************************************");

/*
Output:
  John
  Jane
  Martin
  Katie
  Louis
*/


// **************************************************************************************************

                                   // 3. forEach()

// The forEach() is an array’s method that uses a callback function to include any custom logic to the iteration. In other words, forEach() will execute the provided callback function once for each array element.

// The forEach() method has the following syntax:

// array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// callback — refers to the callback function that takes up 3 arguments:
// 1. currentValue — the data/value of the current element
// 2. index (optional) —the array index of the current element
// 3. array (optional) —the entire array object
// thisArg (optional) — Value to be passed to the callback function which will be used as its this value.
// Return — undefined

// Example of using forEach() loop

var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

myArray.forEach(function(profile, index, myArr) {
    console.log(`Index: ${index}, Name: ${profile.name}`);
});

console.log("************************************************************");

/*
Output:
  Index: 0, Name: John
  Index: 1, Name: Jane
  Index: 2, Name: Martin
  Index: 3, Name: Katie
  Index: 4, Name: Louis
*/

// **************************************************************************************************

                                // 4. while Loop

// The basic while loop has the following syntax:

// while (condition) {
//     // code block to be executed
// }
// condition — defines when the loop will stop looping

// Example of using while loop


var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i].name)
    i++
}

console.log("************************************************************");

/*
Output:
  John
  Jane
  Martin
  Katie
  Louis
*/

// **************************************************************************************************

                                    // 5. do/while Loop

// The do/while loop is in fact very similar to while loop. The only difference is that do/while loop will be triggered at least once regardless of the condition.

// The basic do/while loop has the following syntax:

// do {
//     // code block to be executed
// } while (condition)
// condition — defines when the loop will stop looping

// Example of using do/while loop

var myArray = [
    {id: 1, name: 'John', age: 12},
    {id: 2, name: 'Jane', age: 14},
    {id: 3, name: 'Martin', age: 13},
    {id: 4, name: 'Katie', age: 17},
    {id: 5, name: 'Louis', age: 11}
];

var i = 0;
do {
    console.log(myArray[i].name)
    i++
} while(i < myArray.length)

console.log("************************************************************");

/*
Output:
  John
  Jane
  Martin
  Katie
  Louis
*/


// **************************************************************************************************

                                           // 6. map()

// At first glance, map() method is in fact very similar to forEach() method as it will also execute the provided callback function once for each array element. The only major difference is that map() method will create and return a new set of arrays based on the result of the callback function.

// According to the documentation, one should use forEach() or for/of loop instead of map() method if you’re not using the newly created array it returns and/or you’re not returning a value in the callback function or else it will be considered as an anti-pattern.

// The map() method has the following syntax:

// var new_array = array.map(function callback(currentValue[, index[, array]]) {
//     // Return element for new_array
// }[, thisArg])
// callback — refers to the callback function that takes up 3 arguments:
// 1. currentValue — the data/value of the current element
// 2. index (optional) — the array index of the current element
// 3. array (optional) — the entire array object
// thisArg (optional) — Value to be passed to the callback function which will be used as its this value.
// Return — a new set of array based on the return result of the callback function

// Example of using map() method

var myArray = [
    {id: 1, firstName: 'John', lastName: 'Smith', age: 12},
    {id: 2, firstName: 'Jane', lastName: 'Brown', age: 14},
    {id: 3, firstName: 'Martin', lastName: 'Johnson', age: 13},
    {id: 4, firstName: 'Katie', lastName: 'Miller', age: 17},
    {id: 5, firstName: 'Louis', lastName: 'Wilson', age: 11}
];

var newArray = myArray.map(function(profile, index, myArr) {
    var newProfile = {
        'id': index + 1,
        'fullName': profile.firstName + ' ' + profile.lastName,
        'age': profile.age
    }

    return newProfile
})

newArray.forEach(function(profile, index, myArr) {
    console.log(profile.fullName)
});

console.log("************************************************************");

/*
Output:
  John Smith
  Jane Brown
  Martin Johnson
  Katie Miller
  Louis Wilson
*/