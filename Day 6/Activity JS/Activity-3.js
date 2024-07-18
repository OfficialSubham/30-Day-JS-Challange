//Task 7

let array = [1, 2, 3, 4, 5]

const newArray = array.map((num) =>{
    return num * num;
});

console.log(newArray);

//Task 8

const filterArray = array.filter((number) => {
    if (number % 2 === 0) {
        return number;
    }
});

console.log(filterArray);


//Task 9

let totalNumber = 0;

function numberCal (fun, num) {
    totalNumber += num;
}

array.reduce(numberCal, 0);

console.log(totalNumber);
