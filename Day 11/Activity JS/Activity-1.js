//Task 1

const message = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am here after 2 second");
    },2000)
})

message.then((reMessage) => {
    console.log(reMessage);
});

//Task 2

const errPromise = new Promise ((resolve, reject) => {
    reject("error aagaya");
})

errPromise.catch((error) => {
    console.log(error);
    
})