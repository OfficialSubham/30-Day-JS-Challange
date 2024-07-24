//Task 4

class customError extends Error {
    constructor(message) {
        super(message);
        this.name = "customError";
    }


}

console.dir(customError);
console.dir(Error);
function checkValue(value) {
    if(value < 0) {
        throw new customError("number chota hai")
    }
}

try {
    checkValue(-1);
}
catch(error) {
    console.log(error);
}

//Task 5

validInput()

validInput("something")

function validInput(string) {
    try {
        if(string === undefined) {
            throw Error("the string is empty")
        }
        else{
            console.log(string);
        }
    }
    catch(error) {
        console.log(error);
    }
}