//Task 1
function numberChecker(num) {
    if (num > 0) {
        console.log("Number is positive");
    }
    else if (num === 0) {
        console.log("Number is 0");
    }
    else if (num < 0) {
        console.log("Number is negative");
    };
};

numberChecker(22);
numberChecker(-22);
numberChecker(0);

//Task 2

function voteEligiblility (age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    }
    else {
        console.log("Come here when your age is 18 or more");
    };
}

voteEligiblility(19);
voteEligiblility(17);