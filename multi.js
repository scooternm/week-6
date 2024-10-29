let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

//simple - one liner
teamMembers.forEach((t,i) => console.log(i, t.sort().join(", ")));

let formattedList = teamMembers.map(t => t.join(", ")).map((s, i) => `Team ${i + 1} - (${s})`);
formattedList.forEach(item => console.log(item));

// teamMembers.forEach((t, i) => t.forEach(m=>console.log(i + 1, m)));

//generic for re-use in utils.js
const commas = list => list.join(", ");
const print = text => console.log(text);

//special - only one purpose in teams.js
const team = (roster, index) => `Team ${index + 1} - (${roster})`

//put it all together in app.js
teamMembers.map(commas).map(team).forEach(print);

//function commas2(a){
//return a.join(",");
//}