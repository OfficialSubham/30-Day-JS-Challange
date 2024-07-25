//Task 9
export function fun1 (num) {
    let value = '';
    for(let i = 0; i <= num; i++) {
        value += i;
    }
    console.log(value)
    console.log("\n");
};

export function fun2 (fun1, number) {
    for (let i = 0; i <= number; i++) {
        fun1(i);
    };
};
 fun2(fun1, 5);

//Task 10

export function firstFun (number) {
    return number * number;
};

export function secondFun (num) {

    for (let i = 1; i <= num; i++) {
        let stars = '';
        for (let index = 1; index <= i; index++) {
            stars += '*'
        }
        console.log(stars);
        console.log("\n");
    }
  
};

export function mainFun(firstFun, secondFun, numberr) {
    num = firstFun(numberr);
    secondFun(num);
};

mainFun(firstFun, secondFun, 5)

