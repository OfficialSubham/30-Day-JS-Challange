//Task 7

function productOfNum(num1, num2) {
    if (!num2) {
        return num1;
    }
    else {
        return num1 * num2;
    }
}

console.log(productOfNum(2, 34));
console.log(productOfNum(70));

//Task 8

function greetingMessage (name, age) {
    if (!age) {
        return `Good Morning ${name}`;
    }
    else {
        return `Good Morning ${name}. You radiate confidence at ${age} years old`;
    }
}

console.log(greetingMessage("Subham", 18));
console.log(greetingMessage("Rohan"));

