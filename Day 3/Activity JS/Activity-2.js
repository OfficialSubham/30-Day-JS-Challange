//Task 3
const threeNum = [2, 32, 6];

function largeNum(array) {
    let largeNumber = 0;
    array.forEach((number) => {
        if (number >= largeNumber) {
            largeNumber = number;
        };
    })
    console.log(largeNumber);
}

largeNum(threeNum);