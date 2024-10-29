let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
];

// when does the program start 
console.log(courses.find(c => "PROG200" === c.CourseId).StartDate);

//what is the title of the PROJ500 course
console.log(courses.find(c => "PROJ500"=== c.CourseId).Title);

//what are th titles of the courses that cost $50 or less
courses.filter(c => Number===(c.Fee) <= 50).forEach(c => console.log(c.Title));

//what classes met in "classroom 1"
const results1 = courses.filter(c => c.Location === "Classroom 1").forEach(c => console.log(c.Title));
console.log(results1);

//returns an array
const results2 = courses.filter(c => c.Location === "Classroom 1").map(c => console.log(c.Title));
console.log(results2);

//three parts no return value
courses.filter(c => c.Location === "Classroom 1").map(c => c.Title).forEach(t=>console.log(t));

//output of first | 2nd| 3rd function chaining
let matches = courses.filter(c => c.Location === "Classroom 1");
let titles = matches.map(c => c.Title);
titles.forEach(t => console.log(t));

//compromise
courses.filter(c => c.Location === "Classroom 1")
        .map(c => c.Title)
        .forEach(t => console.log(t));


//further
function print (text){
    console.log(text);
}

courses.filter(c => c.Location === "Classroom 1") //limit to only matches
       .map(c => c.Title) //keep onlt the title
       .forEach(print); //show the title 


