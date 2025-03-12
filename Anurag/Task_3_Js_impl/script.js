/*

It's time to level up your JavaScript skills with Task 3! This task covers the basics of variables, data types, operators, conditionals, loops, and functions – essential building blocks for any developer.

🔹 What to do?
✅ Declare variables (var, let, const)
✅ Work with data types & operators
✅ Use if-else & switch statements
✅ Implement loops (for, while)
✅ Write functions & arrow functions
*/


//1️ Declaring Variables

var  name ="Anurag"   /// function scoped  , avoide using

let age = 23;   // Block-scoped  , can be reassigned
//const country = "India"  // block-scoped , con't be reassigned


//age=24             
////country= "USA"  
//name = "adarsh"      // no

/*
console.log(name)
console.log(age)
console.log(country)
*/

//2 .Data Types & Operators


let num = 10;                               //     Number 
let text = "JavaScript"                     //     string
let isDeveloper = true                      //     boolean
let arr =[1,2,3]                            //     object
let obj ={name:"Anurag",skill:"JS"}         //     object
let und;                                    //     Undefined
let nul =null;                              //     object

//console.log(typeof(nul))



// operaters

let sum = 2+3 // Arthimatic(+, - , * ,  / %)
let isEqal = (5==="5")   //false
let isEqall =(5===5)     /true
let andOp = (false && true)  //  Logiacal AND   is true when both are ture
let orOP = (false || false)  // OR if one are ture  then true 


//console.log(orOP)


// If Else & switch

let score = 85;
if( score>=90){
   // console.log("Grade: A")
}else if(score>=75){
    //console.log("Grade: B")
}else

//console.log("Grade: C")


//Switch case
/*
var day = "Monday"

switch(day){
    case "Moday":
    console.log("Start of the week!");
    break;

    case "Friday":
    console.log("Weekend is near!");
    break;

    default: 
    console.log("Regular day.")
}
*/

// loop (For while)

// for loop

var  a= 10;

for( i=1; i<=5;i++){
   // console.log(i)
}

// while loop
let count =0;
while(count<3){
    //console.log("Count is :", count)
    count++
}




// Function & Arow function

// Regular function
function greet(name){
    return " Helllo,"+name;
}
console.log(greet(name))


//Arrow Function

const add = (a,b)=>a*b
console.log(add(4,7))

// map() & forEach()


let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (Original array unchanged)



let arr1 = [1, 2, 3];

arr1.forEach((num, index) => {
    console.log(`Index: ${index}, Value: ${num}`);
    
});

// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
