// 1. Declare Variables (var, let, const)
var globalVariable = "I am global";
let blockScopeVariable = "I am block scoped";
const constantVariable = "I am constant";

console.log("Global Variable:", globalVariable);
console.log("Block Scope Variable:", blockScopeVariable);
console.log("Constant Variable:", constantVariable);

// Attempting to reassign a constant will throw an error
try {
    constantVariable = "New Value";
    console.log(constantVariable);
} catch (error) {
    console.error("Error: Cannot reassign a constant.");
}

// 2. Work with Data Types & Operators
let name = "Kiran Gosavi";
let age = 23;
let isAdmin = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Admin?", isAdmin);

// Basic Arithmetic Operators
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Comparison Operators
let isEqual = 5 === 5;
let isNotEqual = 5 !== 5;
let isGreater = 5 > 3;
let isLess = 5 < 3;

console.log("Is Equal?", isEqual);
console.log("Is Not Equal?", isNotEqual);
console.log("Is Greater?", isGreater);
console.log("Is Less?", isLess);

// Logical Operators
let isValid = true && true;
let isInvalid = true && false;
let isEitherValid = true || false;

console.log("Is Valid?", isValid);
console.log("Is Invalid?", isInvalid);
console.log("Is Either Valid?", isEitherValid);

// 3. Use if-else & switch statements
let day = "Monday";

if (day === "Monday") {
    console.log("Today is Monday.");
} else if (day === "Tuesday") {
    console.log("Today is Tuesday.");
} else {
    console.log("Today is not Monday or Tuesday.");
}

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    default:
        console.log("Today is not Monday or Tuesday.");
}

// 4. Implement Loops (for, while)
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log(`Iteration ${j + 1}`);
    j++;
}

// 5. Write Functions & Arrow Functions
// Traditional Function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Kiran");

// Arrow Function
const sayHello = (name) => {
    console.log(`Hi, ${name}!`);
};

sayHello("Kiran");

// Function with Return Value
function add(a, b) {
    return a + b;
}

console.log("Sum:", add(5, 7));

// Arrow Function with Return Value
const multiply = (a, b) => a * b;

console.log("Product:", multiply(5, 7));
