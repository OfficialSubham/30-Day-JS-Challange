//Task 1
errorFun()

function errorFun() {
    try {
        throw Error("Kya kar raha hai error kyu aaya?")
    }
    catch(error) {
        console.log(error);
        
    }
}

//Task 2

numDivide(4, 2)
numDivide(2, 0)

function numDivide(num1, num2) {
    try {
        if(num2 === 0) {
            throw Error("0 se kaise divide karu??")
        }
        else {
            const result = num1 / num2;
            console.log(result);
        }
    }
    catch(error) {
        console.log(error);        
    }
}