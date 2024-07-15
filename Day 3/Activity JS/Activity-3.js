//Task 4
function dayOfTheWeek(num) {
    switch(num) {
        case 1: console.log("Monday");
        break;
        case 2: console.log("Tuesday");
        break;
        case 3: console.log("Wednesday");
        break;
        case 4: console.log("Thursday");
        break;
        case 5: console.log("Friday");
        break;
        case 6: console.log("Saturday");
        break;
        case 7: console.log("Sunday");
        break;
    }
}

dayOfTheWeek(7);
dayOfTheWeek(2);

//Task 5

function marksScore(grade) {
    switch(grade) {
        case "A": console.log("Good Job");
        break;
        case "B": console.log("You can do better");
        break;
        case "C": console.log("Stop using phone");
        break;
        case "D": console.log("Focus on your studies");
        break;
        case "E": console.log("About to fail");
        break;
        case "F": console.log("Failed");
        break;
    }
}

marksScore("D");
marksScore("A");