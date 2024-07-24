//Task 6

const randomPromise = new Promise((resolve, reject) => {
    const num = Math.random();
    if(num < 0.5){
        throw Error("Small")
    }
    else{
        console.log("large");
    }
}).catch((error) => {
    console.log(error);
})

//Task 7

tryCatch();

async function tryCatch() {
    const num = Math.random()
    const newPromise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if(num <= 0.5) {
                reject("lesser")
            }
            else{
                console.log("greater");
            }
        }, 1000);
    }).catch((error) => {
        console.log(error);
    })
}