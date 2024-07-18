//Task 12 
let twoDimenMatrix = [
    [1, 2, 3, 4],
    [4, 3, 2, 1],
    [0, 9, 8, 7]
]
console.log(twoDimenMatrix);

//Task 13
//let think that i want to log 9 from the last array
twoDimenMatrix.forEach((array) => {
    for (let i = 0; i< array.length; i++) {
        if (array[i] === 9) {
            console.log(`${array[i]} number is in index${i} in the ${array.length - 1} row`);
        }
    }
})