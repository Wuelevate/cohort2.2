console.log("Hello Sunil")

// 1....
var firstname = "Sunil";
let lastname = "Rathore";
const phone = 9758204516;

console.log(firstname, " " + lastname + " " + phone);


//2....Data Types

// #...primitive datatypes...
let Name = "Sunil";
let Age = 25;
let isActive = true;
let City;
let State = null;
console.log(Name + " " + Age + " " + isActive + " " + City + " " + State);
//#..Non-primitive Datatypes..
// 1.object 2. Array 3.Function
  //Object...
let Person = {
    Name: "Sunil Rathore",
    Age: 25,
    isActive: true,
};

console.log(typeof Person);

//Array ...

let array = [1, 3, 4, 5, 6, 7, 8, 98];
console.log(array)
func('Sunil')

//function...

function func(name) {
    console.log(`Hello, ${name}`);
}

//....Condition
let a = 25;
let b = 27;
if (a == b)
{
    console.log(`Value matched, ${a}`)
}else {
    console.log(`Value Not Mached,${a}`)
}

let day = [0, 1, 2, 3, 4, 5, 6]
let currentDay = day[5];

switch(currentDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Loops

//1..For loop
  
let number = 10;
for (let i = 1; i <= number; i++)
{
    console.log(`Foor loop, ${i}`);
}

//2.While loop
let wh = 1;
while (wh<=10)
{
    console.log(`Whhile loop, ${wh}`);
    wh++;
}

// Array Function

function add(a,b)
{
    return a+b;
}

function minus(a,b)
{
    return a-b;
}

console.log(`Function, ${add(3, 6)}`);
console.log(`Function, ${minus(3, 6)}`);

// Use Array Function

const squre = (n) => {
    return n * n;
};
console.log(`Arrow Function, ${squre(9)}`)

const cube = (a) => a * a * a;
console.log(`ArrowFunction with cube, ${cube(9)}`)
//....................................
const person = {
    Name: "Sunil",
    Func: function ()
    {
        return `Hello, My Name Is ${Name}`;
    }
}

console.log(person.Func());

//Arrow function with Array Method
// Three method Map,filter,reduce

//use map
let arr = [2, 3, 6, 7, 8]
 
const sqr = arr.map(n => n * 2);
console.log(sqr);

const con = arr.filter(n => n % 2 === 0)
console.log(con);

const sum = arr.reduce((a,c)=>a+c)
console.log(sum)

