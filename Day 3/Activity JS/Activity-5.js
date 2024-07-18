//Task 7

function leapYearFinder(year) {
    if (year % 400 === 0) {
        console.log("Year is a leap year");
    }
    else if (year % 4 === 0 && year % 100 != 0) {
        console.log("Year is a leap year");
    }
    else {
        console.log(`${year} is not a leap year`)
    }
};

leapYearFinder(1200);
leapYearFinder(2006);
leapYearFinder(2004);
leapYearFinder(2000);
