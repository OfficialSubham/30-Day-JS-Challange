//Task 3
 function maximumNumber(num1, num2) {
    if (num1 === num2) {
        console.log("Both Number are same");
    }
    else if(num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    }
    else if (num1 < num2) {
        console.log(`${num2} is greater than ${num1}`);
    }
 }

 maximumNumber(1, 3);
 maximumNumber(2, 1);
 maximumNumber(12, 12);

 //Task 4

 function addTwoStrings (string1, string2) {
    const result = string1 + string2;
    return result;
 }

console.log(addTwoStrings("Snow", "ball"));
console.log(addTwoStrings("Hello", "World"));