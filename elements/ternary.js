//? ternary operator - make if/else value into one line 

let option = undefined; //empty/nothing, unset, (null) 
let input = true;

if (input){
    option = "yes we can";
}else{
    option = "no we will not";
}

console.log("OPTION:", option);

const lightColor = "RED";
const action = lightColor === "GREEN" ? "GO GO GO" : "STOP";
console.log(action);