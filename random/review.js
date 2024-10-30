x = 123 //assign a value to a variable-name (AKA identifier)

let y = 456 //sets inital value
y = 789 //changes the value

const TAX_RATE = 0.08
//TAX_RATE = 0.12 //ERROR. const can't be changed

const list = [1,2];
list.push(3); //LEGAL - NO ERROR changing the *content* is permitted

const person = { first: "Kay", last: "McCray"}
person.age = 57; // NO ERROR changing the *content* is permitted
// person = {} //won't work
var coo = "bar" //not really used. old and ambigous

//SIMPLE/PRIMATIVE DATA TYPES - Shape/Size of data in memory
first = "Kay" //STRING ("AAA")OF CHARACTERS 'a'
age = 57 // Number
DOB = new Date("5/08/1995"); //date
isCool = true //Boolean
let u; //undefined
let getList = (a, b) => a && b ? [a,b] : null;
output = getList() // could return null if unsuccessful
missing = null // null is considered an object by typeof

//COMPLEX DATA TYPES - COLLECTIONS e.g. array lists and object dictionary
list = [111,222,333] //array is an ordered list
dict = {color:"red", width:"100px"} //Object (associative array) {key:value, key2:value2}

//OPERATORS - MATH 
sum = 4 + 5 //addition
delta = 4 - 5 //subtract difference
prod = 4 * 5 //multiplication
d = 4 / 5 //division/fractions

//PEMDAS - ORDER OF OPERATIONS 

// OPERATORS - LOGIC - SYLLOGISMS
//TRUTH TABLES 0===false 1===true
good = smart || strong //OR
// || OR
// A B OUTPUT
// 0 0 0
// 1 1 1
// 1 0 1 
// 1 1 1 


tasty = chocolate && vanilla //AND
// && AND
//A B OUTPUT
// 0 0 0
// 0 1 0 
// 1 1 1

cloudy = !sunny //NOT - inverts(opposite)
// ! NOT 
// A OUTPUT
// 0 1
// 1 0

// PEMDAS - ORDER OF OPERATIONS
a = "1" //string text w/ a character of the numeral "1"
b = 2 //integer
a == b // Equal "1" == 1 - Avoids converting text to a number
a === b // Equal and the same data type
a != b // not equal
a !== b // not equal including data type
a < b //less than
a > b // greater than
a <= b //less than or equal to
a >= b //greater than or equal to

//CONDITIONALS - BRANCHING (IF, ELSE IF, ELSE, SWITCH, CASE)
isAwesome = true
isOK = false
if(isAwesome){ //DO IT OR NOT - ONLY ONE INITIAL CASE
    console.log("YAY!")
}else if(isOK){ //OPTIONAL - AS MANY ELSE IFs AS YOU NEED
    console.log("OK.")
}else{ //OPTIONAL - ONLY ONE FINAL CASE
    //only if not awesome and not ok
    //finally if neither exp or exp2 then do this
    console.log("Meh");
}

//RIGHT WAY 
isNew = true
isBlack = true

if(isNew && isBlack){
    console.log("BUY IT!")
}

//WRONG but FUNCTIONAL
// if (isNew){
//     if(isBlack){
//         console.log("BUY IT")
//     }
// }

//TERNARY 3 WAY OPERATOR
action = isGreen ? "GO" : "STOP"

// LOOPS - 
//while(exp) - good for learning loop steps
// do while(exp) good when you want to always enter the loop once
//for(;;) classic - we want to use the index
//for(of) - use a list
//for(in) - use keys of an object

//ES6 - Functional programming
//.forEach() - apply a function to each item
// .map() - tranform each item
// .filter() - return matches
// .find() - returns first matching object from list/array
// . findIndex() - returns the position (index) where the first match was found

//CODE REUSE - function (a block of code to be reused)
// function add (a,b){ //receive positional parameters in order
//     return a + b
// }

//arrow function
const add = (a,b) => a + b; //same but shorter way to assign an anonymous function to an identifier

result = add(6,7); //call/invoke function by name passing arguments 6 and 7
// result 6 + 7 
console.log(result);

//IIFE - immediately invoked functin expression
console.log(((a, b) => a +b )(6,7)) //13

