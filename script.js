/*Write a function called myAlphabetLength which console.logs the length of the
array.*/
function myAlphabetLength (...arr){
console.log(arr.length);
}

//5. Declare and initialize an array called 'Planets' with 5 string values.


var Planets = ['mercury', 'venus', 'earth', 'mars', 'jupter'];

//6. Console.log each item using index in the array of Planets.

for (var i = 0; i<Planets.length; i++){
    console.log(Planets[i]);
}

/*Declare and initialize an array called wowDatatypes which has 3 different data
types (NOT OBJECTS) and console.log the values.*/


var wowDatatypes = ['Marcus', 25, 1.96];

for (var i = 0; i<wowDatatypes.length; i++){
    console.log(wowDatatypes[i]);
}

// Declare a variable hello. Assign a function to it returning 'Hello world!'.

var a = 'Hello';

function helloFunction (){
    return a + ' World';
}

console.log(helloFunction());



