//Task 3

const seqPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("getting data...")
    },1000)
})

seqPromise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fetching data..")
        },1000)
    })
}).then((data) => {
    console.log(data);
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("here is your data")
        },2000);
        
    })
}).then((data) => {
    console.log(data);
    
})

