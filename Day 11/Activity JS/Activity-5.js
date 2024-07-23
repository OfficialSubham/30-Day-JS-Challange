//Task 8

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("first promise")
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("second promise")
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("third promise")
    }, 3000)
})

Promise.all([promise1, promise2, promise3]).then((value) => {
    console.log(value);
    
})

//Task 9

Promise.race([promise1, promise2, promise3]).then((first) => {
    console.log(first);
    
})