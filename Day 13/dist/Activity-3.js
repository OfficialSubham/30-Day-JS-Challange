//Task 5

const sumOfNum = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

console.log(sumOfNum(12, 14));
console.log(sumOfNum(22, 90));

//Task 6

const stringChecker = (string, character) => {
    const str = string;
    let booleanValue = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == character) {
            booleanValue = true;
            break;
        }
    }
    return booleanValue;
};

console.log(stringChecker("Hello World", "T"));
console.log(stringChecker("Hello World", "W"));