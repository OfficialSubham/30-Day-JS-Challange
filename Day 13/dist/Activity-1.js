//Task 1
export function evenOrOdd(num) {
    if (num === 0) {
        console.log("Number 0 is neither Odd nor Even");
    }
    else if (num % 2 === 0) {
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    };
};


evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(4);

//Task 2

export function calculateSquare(num) {
    const result = num * num;
    return result;
};

console.log(calculateSquare(99));
console.log(calculateSquare(12));
console.log(calculateSquare(11));